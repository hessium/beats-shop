const openItem = item => {
  const container = item.closest(".team__item");
  const conttentBlock = container.find(".team__description");
  const textBlock = conttentBlock.find(".team__description-block");
  const reqHeight = textBlock.height();

  container.addClass("active");
  conttentBlock.height(reqHeight);
}

const closeEveryItem = container => {
  const items = container.find('.team__description');
  const itemContainer = container.find(".team__item");

  itemContainer.removeClass("active");
  items.height(0);
}

$('.team__name').click(e => {
  const $this  = $(e.currentTarget);
  const container = $this.closest('.team');
  const elemContainer = $this.closest(".team__item");

  if (elemContainer.hasClass("active")) {
    closeEveryItem(container);
  } else {
    closeEveryItem(container);
    openItem($this);
  }
});