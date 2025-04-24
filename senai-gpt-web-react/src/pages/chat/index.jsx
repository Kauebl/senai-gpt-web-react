
import "./chat.css"

function Chat() {

    const [chats, setChats] = useSate([]);

    useEffect(() => {

        getChats();


    }, []);

    const getChats = async () => {

        let response = await fetch("https://senai-gpt-api.azurewebsites.net/", {



            header: {

                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }
        });

        console.log(response);

        if (response.ok == true) {


            let json = await response.json();

            setChats(json);
        } else {


            if (response.status == 401)

                alert("Token invalido. faca login novamente.");
            window.location.hrep = "/login";

        }
    }

    return (
        <>
            <div className="container1">



                <div className="coluns">
                    <header className="left-panel">

                        <div className="top">


                            <button>+ New chat</button>

                            {chats.map(chat => (

                                <button className="btn-chat">
                                    <img src="../assets/imgs/chat.svg" alt="icone de chat" srcset="" />
                                    Ai Chat Tool Ethics
                                </button>


                            ))}

                        </div>

                        <div className="bottom">

                        </div>





                    </header>
                </div>

                <main className="central-panel">
                    <img src="../assets/imgs/Chat (1).svg" alt="" />

                    <div className="inpt-container">
                        <img src="../assets/imgs/Microphone.svg" alt="microfone" />
                        <img src="../assets/imgs/photos.svg" alt="photos" />
                        <input placeholder="Type a message" type="text" />
                        <img src="../assets/imgs/enviar.svg" alt="enviar" />
                    </div>





                </main>
            </div>



        </>
    )
}

export default Chat