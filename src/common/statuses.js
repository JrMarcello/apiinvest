const statuses = {
  fundraising: {
    OPENED: 1,
    CANCELED: 2,
    CONFIRMED: 3,
    SUSPENDED: 4,
    CLOSED: 5,
    SETTLED: 6
  },

  investment: {
    PENDING: 1,
    CONFIRMED: 2,
    CANCELED: 3,
    WAITING_RETURN: 4
  },

  document: {
    IMAGE: 1,
    PDF: 2
  },

  pdf: {
      COMMON: 1,
      JURIDIC: 2
  }
}

export default statuses
