import React from 'react';

class CandidatProfile extends React.Component {
    render() {
        var imgProfileUrl = "https://pmctvline2.files.wordpress.com/2016/08/the-simpsons-donald-trump-episode.jpg";

        console.log('on profile data', this.props.selectedCandidate);

        return(
            <div className="profile">
                <div className="header">
                    <img src={'http://unitedswingstates.com/uploads/candidates/' + this.props.selectedCandidate.path} className="header_img" alt="Candidat picture"/>
                </div>
                <h1 className="profile_title">{this.props.selectedCandidate.last_name} {this.props.selectedCandidate.first_name}</h1>
                <h2 className="profile_slogan">« {this.props.selectedCandidate.campaign_slogan} »</h2>


                <div className="informations">
                    <div className="informations_block">
                        <h3 className="informations_block_title">Childhood</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div className="informations_block">
                        <h3 className="informations_block_title">Presidential elections</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                </div>

                <div className="keyevents">
                    <h2 className="keyevents_title">Key events</h2>
                    <hr className="keyevents_hr"/>
                    <div className="keyevents_block">
                        <div className="keyevents_block_content">
                            <h3 className="keyevents_block_content_title">2000</h3>
                            <p className="keyevents_block_content_text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CandidatProfile;