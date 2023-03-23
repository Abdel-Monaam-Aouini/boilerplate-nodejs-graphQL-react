import { beforeEach, describe, it } from 'vitest'

describe('demo', () => {
  beforeEach(async (context) => {
    // extend context
    context.foo = 'bar'
  })

  it('should work', ({ foo }) => {
    console.log(foo) // 'bar'
  })
})
