// Create a horoscope app where the user can enter their birthday and get their horoscope. There should be minimum 12 unique horoscopes.

// Assign a horoscope to each month

// Aries: March 21 – April 19
// Taurus: April 20 – May 20
// Gemini: May 21 – June 20
// Cancer: June 21 – July 22
// Leo: July 23 – August 22
// Virgo: August 23 – September 22
// Libra: September 23 – October 22
// Scorpio: October 23 – November 21
// Sagittarius: November 22 – December 21
// Capricorn: December 22 – January 19
// Aquarius: January 20 – February 18
// Pisces: February 19 – March 20

document.querySelector('#submit').addEventListener('click', getHoroscope)

function getHoroscope() {
    let input = document.querySelector('#month').value
    const result = document.querySelector('#result').innerText = input
    const month = result.split('-')[1]
    const date = result.split('-')[2]

// Aries: March 21 – April 19
    if ((month == 3 && date >= 21) || (month == 4 && date <= 19)) {
        document.querySelector('#display').innerText = 'Aries'
        document.querySelector('#horoscope').innerText = 'Today is a good day to trust your instincts and take the lead.'
    }
// Taurus: April 20 – May 20
    else if ((month == 4 && date >= 20) || (month == 5 && date <= 20)) {
        document.querySelector('#display').innerText = 'Taurus'
        document.querySelector('#horoscope').innerText = 'Take your time today. Something good may come from being patient.'
    }
// Gemini: May 21 – June 20
    else if ((month == 5 && date >= 21) || (month == 6 && date <= 20)) {
        document.querySelector('#display').innerText = 'Gemini'
        document.querySelector('#horoscope').innerText = 'Slow down and focus on what matters.'
    }
// Cancer: June 21 – July 22
    else if ((month == 6 && date >= 21) || (month == 7 && date <= 22)) {
        document.querySelector('#display').innerText = 'Cancer'
        document.querySelector('#horoscope').innerText = 'Take your time today. Something good may come from being patient.'
    }
// Leo: July 23 – August 22
    else if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) {
        document.querySelector('#display').innerText = 'Leo'
        document.querySelector('#horoscope').innerText = 'Try conversing with a stranger today. See where it coudl take you.'
    }
// Virgo: August 23 – September 22
    else if ((month == 8 && date >= 23) || (month == 9 && date <= 22)) {
        document.querySelector('#display').innerText = 'Virgo'
        document.querySelector('#horoscope').innerText = 'Trust and believe in yourself. You never know where confidence could take you.'
    }
// Libra: September 23 – October 22
    else if ((month == 9 && date >= 23) || (month == 10 && date <= 22)) {
        document.querySelector('#display').innerText = 'Libra'
        document.querySelector('#horoscope').innerText = 'Be reflective, and allow yourself some grace. Everyday is a lesson, not a challenge.'
    }
// Scorpio: October 23 – November 21
    else if ((month == 10 && date >= 23) || (month == 11 && date <= 21)) {
        document.querySelector('#display').innerText = 'Scorpio'
        document.querySelector('#horoscope').innerText = 'Patience is a virtue. One step at a time.'
    }
// Sagittarius: November 22 – December 21
    else if ((month == 11 && date >= 22) || (month == 12 && date <= 21)) {
        document.querySelector('#display').innerText = 'Sagittarius'
        document.querySelector('#horoscope').innerText = 'Do you know the muffin man? Who lives Drury Lane? I like him.'
    }
// Capricorn: December 22 – January 19
    else if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) {
        document.querySelector('#display').innerText = 'Capricorn'
        document.querySelector('#horoscope').innerText = 'Someone will test your patience today. Unfortunately, you will fail.'
    }
// Aquarius: January 20 – February 18
    else if ((month == 1 && date >= 20) || (month == 2 && date <= 18)) {
        document.querySelector('#display').innerText = 'Aquarius'
        document.querySelector('#horoscope').innerText = 'Dude, just like, let it all go, bro. Just be free, man.'
    }
// Pisces: February 19 – March 20
    else if ((month == 2 && date >= 19) || (month == 3 && date <= 20)) {
        document.querySelector('#display').innerText = 'Pisces'
        document.querySelector('#horoscope').innerText = 'Spongebob post-breakup with Sandy be like: You used to call me on my shell phone.'
    }
}