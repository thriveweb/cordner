import React from 'react'
import CMS from 'netlify-cms'
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { AdvisorsPageTemplate } from '../templates/AdvisorsPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { SinglePostTemplate } from '../templates/SinglePost'
import { SingleCasestudyTemplate } from '../templates/SingleCasestudy'
import { SingleCareerTemplate } from '../templates/SingleCareer'
import { SingleServiceTemplate } from '../templates/SingleService'
import { SingleTeamTemplate } from '../templates/SingleTeam'
import { StandardPageTemplate } from '../templates/StandardPage'

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('advisors-page', ({ entry }) => (
  <AdvisorsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('blog-page', ({ entry }) => (
  <BlogIndexTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('privacy-page', ({ entry }) => (
  <StandardPageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('disclaimer', ({ entry }) => (
  <StandardPageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('terms', ({ entry }) => (
  <StandardPageTemplate {...entry.toJS().data} />
))

CMS.registerPreviewTemplate('posts', ({ entry }) => (
  <SinglePostTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('casestudies', ({ entry }) => (
  <SingleCasestudyTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('careers', ({ entry }) => (
  <SingleCareerTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('services', ({ entry }) => (
  <SingleServiceTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('team', ({ entry }) => (
  <SingleTeamTemplate {...entry.toJS().data} />
))
