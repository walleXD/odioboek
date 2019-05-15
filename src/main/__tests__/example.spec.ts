test("test something", (): void => {
  expect(1).toBe(1)
  expect(process.versions.electron).toMatch(/^5.*$/)
})
