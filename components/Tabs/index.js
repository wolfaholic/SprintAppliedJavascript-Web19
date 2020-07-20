// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const newsTopics = document.quearySelector('.topics')

axios
    .get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(response => {
        console.log(response);
        response.data.topics.foreach(item => {
            const topics = tabsComponent(item);
            newsTopics.appendChild(topics);
        });
    })
    .catch(function (error) {
        console.log ('error', error);
    });

    function tabsComponent(data) {
        let tabTopic = document.createELement ('div');
        tabTopic.classList.add('tab');
        tabTopic.textContent = `${data}`;

        console.log('data', data);

        return tabTopic;
    }