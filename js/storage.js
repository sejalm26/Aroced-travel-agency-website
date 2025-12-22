// Get wishlist
function getWishlist() {
  let wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
}

// Add to wishlist
function addToWishlist(item) {
  let wishlist = getWishlist();

  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].id === item.id) {
      return; // already exists
    }
  }

  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

// Remove from wishlist
function removeFromWishlist(id) {
  let wishlist = getWishlist();
  let newList = [];

  for (let i = 0; i < wishlist.length; i++) {
    if (wishlist[i].id !== id) {
      newList.push(wishlist[i]);
    }
  }

  localStorage.setItem("wishlist", JSON.stringify(newList));
}
