let goLoading = 0;
let OpenheaderOnOff = true;

const body = document.querySelector('body');

const headerOnOff = document.querySelector('.on-off');
const On = document.querySelector('.on-off .on');
const Off = document.querySelector('.on-off .off');
const runner = document.querySelector('.on-off .runner');

headerOnOff.addEventListener('click', () => {
    if (OpenheaderOnOff) {
        OpenheaderOnOff = false;

        body.classList.toggle('change');

        On.classList.toggle('open_on-off');
        Off.classList.toggle('open_on-off');
        runner.classList.toggle('open_on-off');

        if (goLoading == 0) {

            goLoading = 1;
        }
        else {

            goLoading = 0;
        }
        setTimeout(() => {
            if (goLoading == 1) {
                setTimeout(() => {
                    if (goLoading == 1) {
                        setTimeout(() => {
                            if (goLoading == 1) {
                                changePage()
                            }
                        }, 700)
                    }
                }, 700)
            }
        }, 700)

        setTimeout(() => {
            OpenheaderOnOff = true;
        }, 1000)
    }
})

function changePage() {
    window.location.href = 'index.html'
}


// fetch(('https://api.github.com/users/m1fka'))
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Сеть недоступна, статус: ' + response.status);//если ошибка
//         }
//         else {
//             return response.json()
//         }
//     })
//     //выводим нужные данные
//     .then(githubUser => {
//         gitHubImg.src = githubUser.avatar_url;
//         logGit.innerHTML = 'Login - ' + githubUser.login + ' (' + githubUser.id + ')';
//         nameGit.innerHTML = 'Name - ' + githubUser.name;
//         bioGit.innerHTML = 'Bio - ' + githubUser.bio;
//         zagruska.classList.add('go');
//     })