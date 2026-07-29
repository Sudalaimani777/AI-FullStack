
const allUsers = [];

export const authUserController = async (request, response) => {
    try {
        const { body } = request;
        allUsers.push(body);
        response.status(201).json({
            "message":"User created successfully",
            "user-datas":allUsers
        })
    } catch (err) {
        console.log(err);
    }
}