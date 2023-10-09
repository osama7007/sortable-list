// drag and drop functionality
const listData = document.querySelector(".List_data")
const listContainer = document.getElementById("sortable-list")
const sortableList = new Sortable(listContainer, {
  onEnd: function (event) {
    // Get the updated list order
    const items = event.from.children
    let idOrderPairs = []

    idOrderPairs = Array.from(items).map((item, index) => {
      return {
        id: index + 1,
        order: item.getAttribute("data-id"),
      }
    })
    // display orders data
    listData.innerHTML = JSON.stringify(idOrderPairs)
    console.log(idOrderPairs)
  },
  animation: 150,
})

// style for even and odd orders
const listItems = document.querySelectorAll("#sortable-list li[data-id]")
listItems.forEach((item) => {
  const dataId = item.getAttribute("data-id")
  if (dataId % 2 === 0) {
    item.classList.add("even")
  } else {
    item.classList.add("odd")
  }
})

