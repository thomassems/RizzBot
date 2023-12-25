import "./fields.css";

function Fields() {
  return (
    <div>
        <div>
            <button className="random button">Generate Random Pick Up Lines</button>
        </div>
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
        <div>
            <button className="button generator">Generate Custom Pick Up Lines</button>
        </div>
    </div>
  );
}

export default Fields;