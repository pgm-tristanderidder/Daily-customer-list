export const home = (req, res) => {
    const inputs = [
        {
            type: "text",
            name: "todo",
            placeholder: "add customer",
            err: req.formErrorFields?.todo ? req.formErrorFields.todo : "",
            value: req.body?.todo ? req.body.todo : "",
        }
    ]

    const data = {
        inputs: inputs,
    }

    res.render("home", data);
}