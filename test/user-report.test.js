import CommentsDAO from "../src/dao/commentsDAO"

describe("User Report", () => {
  beforeAll(async () => {
    await CommentsDAO.injectDB(global.mflixClient)
  })

  test("Should return exactly twenty results", async () => {
    const userReport = await CommentsDAO.mostActiveCommenters()
    expect(userReport.length).toBe(20)
  })

  test("Should return correct comment totals", async () => {
    const userReport = await CommentsDAO.mostActiveCommenters()
    const topCommenter = userReport[0]
    expect(topCommenter).toEqual({
      _id: "roger_ashton-griffiths@gameofthron.es",
      count: 331,
    })
  })

  /*test("Should have majority read concern", async () => {
    const userReport = await CommentsDAO.mostActiveCommenters()
    console.log(userReport)
    expect(userReport.options.readConcern.level).toEqual("majority")
  })*/

})
