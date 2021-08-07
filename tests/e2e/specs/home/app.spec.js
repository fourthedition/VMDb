// https://docs.cypress.io/api/introduction/api.html

const { expect } = require("chai")
const { it } = require("mocha")

describe('My First Test', () => {
  beforeEach(() => {
    cy.viewport(1024, 768)
  })
  it('เข้าเยี่ยมชมหนังเรื่อง F9', (done) => {
    const exampleMovie = '1. F9'
    cy.visit('/')
    cy.contains(exampleMovie).click()
    cy.contains('F9')
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('Cannot read property \'imdb_id\' of undefined')
      done()
      return false
    })
  })
  it('ดูหน้า IMDb Page', () => {
    cy.get('#homepage1').click()
  })
  it('ดูหน้า Oficial Page', () => {
    cy.get('#homepage2').click()
  })
  it('ดูหน้า Facebook Page', () => {
    cy.get('#homepage3').click()
  })
  it('ดูหน้า Twitter Page', () => {
    cy.get('#homepage4').click()
  })
  it('ดูหน้า Instragram Page', () => {
    cy.get('#homepage5').click()
  })
  it('ตรวจสอบข้อมูลว่าออกมาครบ', () => {
    cy.get('.cast__item').should('have.length', 12).each(($li, index) => {
      console.log(`Cast: ${$li[0].innerText}`)
    }).then((result) => {
      expect(result).to.have.length(12)
    })
  })
  it('หาข้อมูลคนแรกว่า Vin Diesel หรือไม่', () => {
    cy.get('.cast__item').should('have.length', 12).each(($li, index) => {
      return 'PASS'
    }).then((result) => {
      expect(result[0].innerText).eq('Vin Diesel\nas Dominic Toretto')
    })
  })
  it('กลับเข้าสู่หน้าหลัก', () => {
    cy.get('.header__bar').click()
  })
})
