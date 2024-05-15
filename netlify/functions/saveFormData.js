exports.handler = async (event) => {
    // Parse form data from the request
    const formData = JSON.parse(event.body);

    // Here you can save the form data to the user's profile
    // Example: Update user metadata with form data

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Form data saved successfully' }),
    };
};