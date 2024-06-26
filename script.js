document.addEventListener('DOMContentLoaded', function() {
    // Fetch the content from GPT-3
    fetchContentFromGPT3();
});

function fetchContentFromGPT3() {
    const API_KEY = 'YOUR_API_KEY';
    const prompt = "Write a description of travel services for a travel agency website.";

    fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: 150
        })
    })
    .then(response => response.json())
    .then(data => {
        const servicesSection = document.getElementById('services');
        servicesSection.innerHTML = `<h2>Our Services</h2><p>${data.choices[0].text}</p>`;
    })
    .catch(error => {
        console.error('Error fetching content from GPT-3:', error);
    });
}
