const activity = document.querySelectorAll('.activity-wrapper') // work, play ...
const date = document.querySelectorAll('.date') // dail, weekly, monthly
getData()
async function getData() {
    const responce = await fetch('./assets/data.json');
    const data = await responce.json();


    date.forEach(eachDate => {
        eachDate.addEventListener('click', (e)=> {
            e.preventDefault()
            let target = e.target
            if (target.classList.contains('daily')) {
                addCurrentClass(target)
                e.preventDefault()
                data.forEach(element => {
                    changeInnerHtml(element, element.timeframes.daily.current, element.timeframes.daily.previous, 'Yesterday')
                });
            } 
            if (target.classList.contains('weekly')) {
                addCurrentClass(target)
                e.preventDefault()
                data.forEach(element => {
                    changeInnerHtml(element, element.timeframes.weekly.current, element.timeframes.weekly.previous, 'Last Week')
                });
            }
            if (target.classList.contains('monthly')) {
                addCurrentClass(target)
                e.preventDefault()
                data.forEach(element => {
                    changeInnerHtml(element, element.timeframes.monthly.current, element.timeframes.monthly.previous, 'Last Month')
                });
            }
        })
    })
}


function changeInnerHtml(element, currentDate, previousDate, previousDateName) {
    activity.forEach(eachActivity => {
        let activityName = element.title.toLowerCase();
        if (eachActivity.classList.contains(activityName)) {
            let activityTime = eachActivity.querySelector('.activity-time')
            let previous = eachActivity.querySelector('.previous');

            activityTime.innerText = `${currentDate}hrs`
            previous.innerHTML = `${previousDateName}-${previousDate}hrs`
        }
    })
}
function addCurrentClass(element) {
    date.forEach(each => {
        each.classList.remove('current')
    })
    element.classList.add('current')
}