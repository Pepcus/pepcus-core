/**
 * A simple Modal Manager which provides proper state management for modals.
 */
class ModalManager {
  constructor() {
    this.getModals = () => this.modals;

    this.add = modal => {
      if (this.modals.indexOf(modal) === -1) {
        this.modals.push(modal);
      }
    };

    this.remove = modal => {
      const idx = this.modals.indexOf(modal);

      if (idx !== -1) {
        this.modals.splice(idx, 1);
      }
    };

    this.isTopModal = modal => Boolean(this.modals.length && this.modals[this.modals.length - 1] === modal);

    // Construct an empty list of modals
    this.modals = [];
  }
  /**
   * Get the current list of modals from the manager
   *
   * @method getModals
   * @return {Array}   The list of modals
   */


}

export default ModalManager;