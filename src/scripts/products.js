(function () {
  const mesureWidth = item => {
    let reqItemWidth = 0;

    const screenWidth = $(window).width();
    const container = item.closest(".products-menu");
    const titlesBLocks =  container.find(".products-menu__title");
    const titlesWidth = titlesBLocks.width()  * titlesBLocks.length;

    const textContainer= item.find(".products-menu__container");
    const paddingLeft = parseInt(textContainer.css("padding-left"));
    const paddingRight = parseInt(textContainer.css("padding-right"));

    const isTablet = window.innerWidth > 480 && window.innerWidth < 769;
    const isMobile = window.innerWidth < 481;
    if(isTablet) {
      reqItemWidth = screenWidth - titlesWidth;
    }else if(isMobile) {
      reqItemWidth = screenWidth - titlesBLocks.width();
    } else {
      reqItemWidth = 500;
    }

    return {
      container: reqItemWidth,
      textContainer: reqItemWidth - paddingLeft - paddingRight
    }
  };
  
  const closeEveryItemInContainer = container => {
    const items = container.find(".products-menu__item");
    const content = container.find(".products-menu__content");

    items.removeClass("active");
    content.width(0);
  }

  const openItem = item => {
    const hiddenContent = item.find(".products-menu__content");
    const reqWidth = mesureWidth(item);
    const textBlocks = item.find(".products-menu__container");

    item.addClass("active");
    hiddenContent.width(reqWidth.container);
    textBlocks.width(reqWidth.textContainer);
  }
  
  $(".products-menu__title").on("click", e => {
    e.preventDefault();
    
    const $this = $(e.currentTarget);
    const item = $this.closest(".products-menu__item");
    const itemOpened = item.hasClass("active");
    const container = $this.closest(".products-menu");

    if (itemOpened) {
      closeEveryItemInContainer(container)
    } else {
      closeEveryItemInContainer(container)
      openItem(item);
    }
  });
  })();

