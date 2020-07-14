import React from 'react'

class Facebook extends React.Component {
    
      componentDidMount = () => {
        console.log("My component mounted!--------------------------------------")
        const script = this.createScript()
        document.body.appendChild(script);
      }

      componentDidUpdate = () => {
        console.log("My component updated!------------------------------------")
        const script = this.createScript()
        document.body.appendChild(script);
      }

      createScript = () => {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v7.0";
        script.async = true;
        script.crossOrigin = "anonymous";
        script.nonce = "hT2hOVtl";
        return script
      }

      render() {
        return (
          <React.Fragment>
            <div id="fb-root" key="facebook"></div>
            <div className="fb-page" data-href="https://www.facebook.com/oliviagracephotographyaz/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false">
                <blockquote cite="https://www.facebook.com/oliviagracephotographyaz/" className="fb-xfbml-parse-ignore">
                    <a href="https://www.facebook.com/oliviagracephotographyaz/">
                        Olivia Grace Photography
                    </a>
                </blockquote>
            </div></React.Fragment>
        )
      }
}

export default Facebook