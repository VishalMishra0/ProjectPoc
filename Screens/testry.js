export default function Todos() {

    const [todo, setTodo] = useState(''); // todo
    const [todos, setTodos] = useState([]); // todos
    const todoRef = firebase.firestore().collection('todos'); // todos collection reference

    // fetch the saved todos realtime
    useEffect(() => {

        todoRef
            // order by time of creating
            .orderBy('createdAt', 'desc')
            // fetch todos in realtime
            .onSnapshot(
                querySnapshot => {
                    const newTodos = []
                    // loop through the saved todos
                    querySnapshot.forEach(doc => {
                        const todo = doc.data()
                        todo.id = doc.id
                        newTodos.push(todo)
                    });
                    // set the todos to the state
                    setTodos(newTodos)
                },
                error => {
                    // log any error
                    console.error(error);
                }
            )
    }, []);

    // add a todo
    const addTodo = () => {
        // check if we have a todo.
        if (todo && todo.length > 0) {
            // get the timestamp
            const timestamp = firebase.firestore.FieldValue.serverTimestamp();
            // structure the data  to save
            const data = {
                text: todo,
                createdAt: timestamp
            };
            // add the data to firestore db
            todoRef
                .add(data)
                .then(() => {
                    // release todo state
                    setTodo('');
                    // release keyboard
                    Keyboard.dismiss();
                })
                .catch((error) => {
                    // show an alert in case of error
                    alert(error);
                })
        }
    }

    // delete a todo
    const deleteTodo = (todo) => {
        // delete todo from firestore db
        todoRef
            .doc(todo.id)
            .delete()
            .then(() => {
                // show a successful alert
                alert("Deleted successfully");
            })
            .catch(error => {
                // show an error alert
                alert(error);
            })
    }

    // render a todo
    const renderTodo = ({ item }) => {
        return (
            <View style={styles.todoContainer} >

                <Text style={styles.todoText}>
                    {item.text[0].toUpperCase() + item.text.slice(1)}
                </Text>

                <View style={styles.textIcons}>

                    <FontAwesome name="trash-o" color="red" onPress={() => deleteTodo(item)} style={styles.todoIcon} />

                </View>

            </View>
        )
    }

    // View
    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='Add new todo'
                    placeholderTextColor="#aaaaaa"
                    onChangeText={(text) => setTodo(text)}
                    value={todo}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.button} onPress={addTodo}>
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
            </View>
            {todos.length > 0 && (
                <View style={styles.listContainer}>
                    <FlatList
                        data={todos}
                        renderItem={renderTodo}
                        keyExtractor={(todo) => todo.id}
                        removeClippedSubviews={true}
                    />
                </View>
            )}
        </View>
    )
}