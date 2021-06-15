 
 
 
 
 
 
 
 async function changeContent() {
    document.getElementById('text').style.display = 'none';
    document.getElementById('input').style.display = 'none';
    document.getElementById('askButton').style.display = 'none';
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('guide').textContent = 'The Magical Ball of Mystery is thinking...'
    await new Promise(r => setTimeout(r, 3000));
    document.getElementById('guide').textContent = 'hmm...'
    await new Promise(r => setTimeout(r, 1500));
    document.getElementById('guide').textContent = '*Jeopardy theme plays*'
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById('guide').textContent = 'Here we go!'
    await new Promise(r => setTimeout(r, 2000));
    document.getElementById('guide').textContent = 'Your answer is...'
    await new Promise(r => setTimeout(r, 3000));
    let num = Math.floor(Math.random() * 9);
    let answer = '';
    switch(num) {
        case 0: answer = 'Without a doubt!' 
        break;
        case 1: answer = 'It is decidely so.'
        break;
        case 2: answer = 'Yes - definitely.'
        break;
        case 3: answer = 'Ask again later.'
        break;
        case 4: answer = 'Reply hazy, try again.'
        break;
        case 5: answer = 'Very doubtful.'
        break;
        case 6: answer = 'Better not tell you now'
        break;
        case 7: answer = 'My source says no.'
        break;
        case 8: answer = 'Outlook not so good.'
        break;
        default: answer = 'There was a problem..'
        break;
    }
    document.getElementById('text').textContent = answer;
    document.getElementById('text').style.display = 'block';

    document.getElementById('resetButton').textContent = 'Ask again?';
    document.getElementById('resetButton').style.margin = '40px auto';
    document.getElementById('resetButton').style.display = 'block';
}

function reset() {
    document.getElementById('resetButton').style.display = 'none'
    document.getElementById('text').textContent = 'Simply enter a question, or feel free to keep it a secret by entering no text, and click ask';
    document.getElementById('text').style.display = 'block';
    document.getElementById('guide').textContent = 'Ask any yes or no question of your choosing, but be careful, some things are better left unknown...'
    document.getElementById('input').style.display = 'inline-block';
    document.getElementById('askButton').style.display = 'inline-block';
    document.getElementById('welcome').textContent = 'Welcome to the magical, mysterious 8 ball!';
    document.getElementById('welcome').style.display = 'block';
}