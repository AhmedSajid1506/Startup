import React, { useEffect, useRef } from 'react'

const InBuildPopup = () => {
    const popup = useRef(null);
    useEffect(() => {
        popup.current.style.display = "block";
        popup.current.classList.add("show");
    })

    const hidePopup = () => {
        popup.current.style.display = "none";
        popup.current.classList.remove("show");
    }

    return (
        <div className="modal fade" ref={popup} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 f-primary" id="staticBackdropLabel">Announcement!</h1>
                        <button type="button" className="btn-close" onClick={hidePopup} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Dear valued visitor, <br />
                        We apologize for any inconvenience caused, but please be aware that our website is currently under construction. We are working hard to make improvements and enhance your browsing experience.
                        Thank you for your patience and understanding. We hope to be back up and running soon! <br />
                        Best regards, <br />
                        The AllTasker Team <br />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn-color px-3 py-2" onClick={hidePopup}>Understood</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InBuildPopup