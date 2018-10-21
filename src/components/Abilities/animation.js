export default function animationSkills() {
    let singleSkill = document.querySelectorAll('.abilities__single-skill span');
    let progressBars = document.querySelectorAll('.abilities__single-skill_progress-bar');

    console.log(singleSkill);

    for (let i = 0; i < singleSkill.length; i++) {
        let item = progressBars[i];
        let dataWidth = item.getAttribute('data-width');
        let innerValue = 0;
        let update = setInterval(chekUpdate, 50);

        function chekUpdate() {
            if (innerValue < dataWidth) {
                innerValue ++;
                item.style.width = innerValue + '%';
                singleSkill[i].textContent = innerValue + '%';
            }
            else {
                clearInterval(update);
            }
        }
    };
}