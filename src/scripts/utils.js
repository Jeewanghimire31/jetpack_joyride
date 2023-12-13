/**
 * Returns a random number between a range
 *
 * @param {number} lower
 * @param {number} upper
 * @returns number
 */
const getRandomNum = (lower = 0, upper = 1) => {
    return lower + Math.random() * (upper - lower);
  };


  /**
   * 
   * @param {object} rect1 
   * @param {object} rect2 
   * @returns {boolean}
   */
  function isCollision(rect1, rect2) {
    return (
        // check the position of character and obstacles to detect
        rect1.x + rect1.width >= rect2.x &&
        rect1.x <= rect2.x + rect2.width &&
        rect1.y + rect1.height >= rect2.y &&
        rect1.y <= rect2.y + rect2.height 
        
    );
}


