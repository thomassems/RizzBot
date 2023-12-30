import "./fields.css";

function Fields() {
  return (
    <div>
        <div>
            <h2>Randomly Clever</h2>
            <p>Let serendipity guide your way with our Random Pickup Line Generator. Whether you're in need of a witty-one-liner for a spontaneous encounter
                or just want to bring a smile to someone's face, our algorithmically crafted pickup lines are sure to spark interest and laughter
            </p>
            <button className="generator button">Generate Pickup Lines</button>
        </div>
        <div>
            <h2>Personalized Charm</h2>
            <p>Make a lasting impression by personalizing your pickup lines based on individual preferences. By inputting information such as the person's name, occupation, and interests, watch
                as RizzBot crafts a tailored icebreaker that's unique as they are. It's the perfect way to show that you've put thought into making that first connection memorable</p>
            <div className="fields">
                <div className="user-input">
                    <label for="Name">Name</label>
                    <input type="text" id="Name" name="Name" placeholder=""></input>
                </div>
                <div className="user-input">
                    <label for="Appearance">Appearance</label>
                    <input type="text" id="Appearance" name="Appearance" placeholder=""></input>
                </div>
                <div className="user-input">
                    <label for="Personality">Personality</label>
                    <input type="text" id="Personality" name="Personality" placeholder=""></input>
                </div>
                <div className="user-input">
                    <label for="Interests">Interests</label>
                    <input type="text" id="Interests" name="Interests" placeholder=""></input>
                </div>
                <div className="user-input">
                    <label for="Occupation">Occupation</label>
                    <input type="text" id="Occupation" name="Occupation" placeholder=""></input>
                </div>
            </div>
        </div>
        <div>
            <button className="button generator">Generate Pickup Lines</button>
        </div>
        <div>
            <h2>Visual Flair</h2>
            <p>Take it a step further by uploading a picture of the person you're interested in. Or cutting-edge image recognition technology scans the photo and generates a pickup line
                that complements their appearance and the scenery. From charming smiles to captivating eyes, RizzBot ensures your approach is as visually captivating as it is verbally enticing</p>
            <button className="button upload">Upload</button>
            <button className="button generator">Generate Pickup Lines</button>
        </div>
        <div>
            <h3>Why RizzBot?</h3>
            <ul>
                <li>Endless Variety: With a vast database of pickuplines, you'll never run out of ways to impress</li>
                <li>Icebreaking Technology: Our AI-powered algorithms guarantee lines that are not only clever but also effective in breaking the ice</li>
                <li>User-Friendly Interface: Easily navigate through the app, input your preferences, and let RizzBot do the rest</li>
                <li>Privacy Assurance: Your data is secure with us. We prioritize your privacy and ensure a safe and enjoyable experience</li>
            </ul>
            <p>Don't let love be a game of chance. Elevate your flirting game with RizzBot and turn every encounter into a memorable moment. Get ready to 
                embark on a journey of charm, laughter, and connection. It's time to leave ordinary pickup lines behind and let RizzBot be your guide to extraordinary connections!





</p>
        </div>
    </div>
  );
}

export default Fields;