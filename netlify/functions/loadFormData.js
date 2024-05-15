exports.handler = async (event) => {
    // Here you can retrieve the form data from the user's profile
    // Example: Retrieve user metadata and send it as response

    const formData = {}; // Replace this with actual form data

    return {
        statusCode: 200,
        body: JSON.stringify(formData),
    };
};
