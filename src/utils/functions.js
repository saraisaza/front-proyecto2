const postFetch = async (jsonData, url) => {
    try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: jsonData
        });
    
        if (!response.ok) {
          throw new Error('Failed to send notification');
        }
        const responseData = await response.json();
        if (responseData.status == 200) {
            console.log('Notification sent successfully');
        }
    console.log(formData);
      } catch (error) {
        console.error(error);
      }
}

module.exports = {postFetch}