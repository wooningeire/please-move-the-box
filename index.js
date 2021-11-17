const qs = selector => document.querySelector(selector);

let isDragging = false;

const dragRack = qs("the-box-drag-rack");
const theBox = qs("the-box");

theBox.addEventListener("pointerdown", event => {
	isDragging = true;

	const startOffset = event.clientY - theBox.offsetTop;

	const onpointermove = event => {
		const yNew = (event.clientY - dragRack.clientTop - startOffset) / (dragRack.clientHeight - theBox.offsetHeight);

		
	};
	addEventListener("pointermove", onpointermove);

	addEventListener("pointerup", () => {
		isDragging = false;
		removeEventListener("pointermove", onpointermove);
	});
});