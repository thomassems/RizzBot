const axios = require("axios");
const fs = require("fs");
const image_str = fs.readFileSync("your_local_image", { encoding: "base64" });
 
const payload_json = JSON.stringify({ base64str: image_str, model_id: '027765184-5b08-410c-97c7-c2caf3p01ad', conf_thresh: 0.4, nms_thresh: 0.45 });

const choochKey = process.env.CHOOCH_KEY;
const apiUrl = "https://apiv2.chooch.ai/predict?api_key=" + choochKey;
axios({ method: "PUT", url: apiUrl, data: payload_json, headers: { "Content-Type": "application/json" } })
.then(function(response) { console.log(response.data); })
.catch(function(error) { console.log(error.message); });