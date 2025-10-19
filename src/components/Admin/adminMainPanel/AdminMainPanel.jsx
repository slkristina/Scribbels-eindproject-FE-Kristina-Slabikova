import "./AdminMainPanel.css";
import UploadAdventureForm from "../uploadAdventureForm/UploadAdventureForm.jsx";
import MessageManager from "../messageManager/MessageManager.jsx";
import AdventureManager from "../adventureManager/AdventureManager.jsx";
import UploadColoringBookForm from "../coloringBooksManager/UploadColoringBookForm.jsx";

function AdminMainPanel({activeTab}) {
    return (
        <main className="main-panel-container">
            {activeTab === "uploadAdventure" && (
                <section>
                    <h1>
                        Nieuw verhaal uploaden
                    </h1>
                    <UploadAdventureForm />
                </section>
            )}

            {activeTab === "uploadColoringPicture" && (
                <section>
                    <h1>
                        Kleurplaat uploaden
                    </h1>
                    <UploadColoringBookForm/>
                </section>
            )}

            {activeTab === "adventureManager" && (
                <section>
                    <h1>
                        Avonturen Manager
                    </h1>
                    <AdventureManager />
                </section>
            )}


            {activeTab === "messageManager" && (
                <section>
                    <h1>
                        Message Manager
                    </h1>
                    <MessageManager />
                </section>
            )}

            {activeTab === "logout" && (
                <section>
                    <h1>
                        U bent uitgelogd!
                    </h1>
                </section>
            )}
        </main>
    );
}

export default AdminMainPanel;

