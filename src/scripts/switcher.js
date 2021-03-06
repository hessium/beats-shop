const findBlockAlias = (alias) => {
  return $(".reviews__item").filter((ndx, item) =>{
    return $(item).attr("data-linked-with") === alias;
  })
};

$(".interactive-avatar__link").on("click", e => {
  e.preventDefault();

  const $this = $(e.currentTarget);
  const target = $this.attr("data-open");
  const itemToShow = findBlockAlias(target);
  const curItem = $this.closest(".interactive-avatar");

  itemToShow.addClass("active").siblings().removeClass("active");
  curItem.addClass("active").siblings().removeClass("active");
});