import "./AdminMainPanel.css";
import UploadAdventureForm from "../uploadAdventureForm/UploadAdventureForm.jsx";
import MediaManager from "../mediaManager/MediaManager.jsx";

function AdminMainPanel({activeTab}) {
    return (
        <div className="main-panel-container">
            {activeTab === "uploadAdventure" && (
                <div>
                    <h1>
                        Nieuw verhaal uploaden
                    </h1>
                    <UploadAdventureForm />
                </div>
            )}

            {activeTab === "uploadColoringPicture" && (
                <div>
                    <h1>
                        Kleurplaat uploaden
                    </h1>
                </div>
            )}

            {activeTab === "mediaManager" && (
                <div>
                    <MediaManager/>
                </div>
            )}

            {activeTab === "logout" && (
                <div>
                    <h1>
                        U bent uitgelogd!
                    </h1>
                </div>
            )}
        </div>
    );
}

export default AdminMainPanel;

