const daily = document.querySelector('.daily');
const weekly = document.querySelector('.weekly');
const monthly = document.querySelector('.monthly');
const activity = document.querySelectorAll('.activity-wrapper')
const date = document.querySelectorAll('.date')
getData()
async function getData() {
    const responce = await fetch('./assets/data.json');
    const data = await responce.json();


    daily.addEventListener('click', (e)=> {
        removeCurrentClass(daily)
        e.preventDefault()
        data.forEach(element => {
            changeInnerHtml(element, element.timeframes.daily.current, element.timeframes.daily.previous, 'Yesterday')
        });
    })
    weekly.addEventListener('click', (e)=> {
        removeCurrentClass(weekly)
        e.preventDefault()
        data.forEach(element => {
            changeInnerHtml(element, element.timeframes.weekly.current, element.timeframes.weekly.previous, 'Last Week')
        });
    })
    monthly.addEventListener('click', (e)=> {
        removeCurrentClass(monthly)
        e.preventDefault()
        data.forEach(element => {
            changeInnerHtml(element, element.timeframes.monthly.current, element.timeframes.monthly.previous, 'Last Month')
        });
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
function removeCurrentClass(element) {
    date.forEach(each => {
        each.classList.remove('current')
    })
    element.classList.add('current')
}