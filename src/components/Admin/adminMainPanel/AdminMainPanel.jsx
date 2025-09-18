import "./AdminMainPanel.css";
import UploadAdventureForm from "../uploadAdventureForm/UploadAdventureForm.jsx";

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
                </section>
            )}

            {activeTab === "mediaManager" && (
                <section>
                    <h1>
                        Media Manager
                    </h1>
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

