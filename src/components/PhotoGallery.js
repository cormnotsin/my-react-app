import React from 'react'
import Gallery from 'react-photo-gallery'
import Lightbox from 'react-images'
import gallery1 from '../img/motherdaughter19.JPG';
import gallery2 from '../img/retake10.JPG';
import gallery3 from '../img/senioreditredo1.JPG';
import gallery4 from '../img/sublett14.JPG';
import gallery5 from '../img/flakeedit8bw.JPG';
import gallery6 from '../img/aero7.JPG';
import gallery7 from '../img/ari10.JPG';
import gallery8 from '../img/wheet13.JPG';
import gallery9 from '../img/butler21.JPG';

const photos = [
    { src: gallery1, width: 4, height: 3 },
    { src: gallery2, width: 2, height: 3 },
    { src: gallery3, width: 6, height: 4 },
    { src: gallery4, width: 6, height: 4 },
    { src: gallery5, width: 6, height: 4 },
    { src: gallery6, width: 4, height: 3 },
    { src: gallery7, width: 4, height: 6 },
    { src: gallery8, width: 4.5, height: 3 },
    { src: gallery9, width: 4, height: 6 }
  ]


class PhotoGallery extends React.Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }

    openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }

      render() {
        return (
          <div>
            <Gallery photos={photos} onClick={this.openLightbox} />
            <Lightbox images={photos}
              onClose={this.closeLightbox}
              onClickPrev={this.gotoPrevious}
              onClickNext={this.gotoNext}
              currentImage={this.state.currentImage}
              isOpen={this.state.lightboxIsOpen}
            />
          </div>
        )
      }
}
export default PhotoGallery

