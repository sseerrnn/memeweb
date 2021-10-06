async function apicall(memedes) {
  const MonkeyLearn = require("monkeylearn");

  const ml = new MonkeyLearn("89b68135dd3e3adc9e459143eb60b9087d2c5a76");
  let model_id = "cl_d6ZM9jhs";
  let data = memedes;
  return ml.classifiers.classify(model_id, data).then((res) => {
    console.log(res.body[0].classifications.map((c) => c.tag_name));
    return res.body[0].classifications.map((c) => c.tag_name);
  });
}
window.apicall=apicall;