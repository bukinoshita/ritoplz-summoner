'use strict'

import test from 'ava'
import summonerCover from './../'

test('should receive link', t => {
  t.is(typeof summonerCover(), 'string')
  t.true(summonerCover().length > 42)
})
