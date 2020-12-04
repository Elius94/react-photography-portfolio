import React from 'react'
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"
import { photos } from "../static-contents/StaticContents"

export const GridGallery: React.FC = () => {
    const [currentImage, setCurrentImage] = React.useState(0)
    const [viewerIsOpen, setViewerIsOpen] = React.useState(false)

    const openLightbox = React.useCallback((event, { photo, index }) => {
        console.log(photo)
        setCurrentImage(index)
        setViewerIsOpen(true)
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0)
        setViewerIsOpen(false)
    };

    return (
        <div>
            <Gallery photos={photos} onClick={openLightbox} direction="column" />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={photos.map(x => ({
                                source: x.src,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}