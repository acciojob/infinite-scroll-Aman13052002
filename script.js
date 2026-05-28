//your code here!
const list = document.getElementById('infi-list');
function addItems(count){
	const currLength = list.children.length;
	for(let i=1;i<=count;i++){
		const li = document.createElement('li');
		li.textContent(`List Item ${currLength + i}`);
		list.appendChild(li);
	}
}
addItems(10);
window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight =
    document.documentElement.scrollHeight;
  if (scrollTop + windowHeight >= documentHeight) {
    addItems(2);
  }
});
