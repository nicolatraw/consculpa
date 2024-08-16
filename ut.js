Promise.all(argv.files.map(async (file) => {
    // Asynchronous operation inside the map function
    try {
        // Perform asynchronous tasks related to 'file'
        // Example: await someAsyncOperation(file);
        const result = await someAsyncOperation(file);
        return result; // Assuming you want to collect results
    } catch (error) {
        // Handle errors from individual file processing
        console.error(`Error processing file ${file}:`, error);
        throw error; // Propagate the error if needed
    }
}))
.then((results) => {
    // All files processed successfully, 'results' is an array of results
    console.log('All files processed successfully:', results);
})
.catch((error) => {
    // Handle any error that occurred in any of the file processing
    console.error('Error processing files:', error);
});
