import React from 'react'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare';
import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { AdvisorsPageTemplate } from '../templates/AdvisorsPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { BlogIndexTemplate } from '../templates/BlogIndex'
import { EventsIndexTemplate } from '../templates/EventsIndex'
import { SinglePostTemplate } from '../templates/SinglePost'
import { SingleCasestudyTemplate } from '../templates/SingleCasestudy'
import { SingleCareerTemplate } from '../templates/SingleCareer'
import { SingleServiceTemplate } from '../templates/SingleService'
import { SingleTeamTemplate } from '../templates/SingleTeam'
import { StandardPageTemplate } from '../templates/StandardPage'
import { UpdatesPageTemplate } from '../templates/UpdatesPage'

CMS.registerMediaLibrary(uploadcare);

// if (
//   window.location.hostname === 'localhost' &&
//   window.localStorage.getItem('netlifySiteURL')
// ) {
//   CMS.registerPreviewStyle(
//     window.localStorage.getItem('netlifySiteURL') + '/styles.css'
//   )
// } else {
//   CMS.registerPreviewStyle('/styles.css')
// }
CMS.registerPreviewTemplate('home-page', HomePageTemplate)
CMS.registerPreviewTemplate('advisors-page', AdvisorsPageTemplate)
CMS.registerPreviewTemplate('blog-page', BlogIndexTemplate)
CMS.registerPreviewTemplate('events-page', EventsIndexTemplate)
CMS.registerPreviewTemplate('contact-page', ContactPageTemplate)
CMS.registerPreviewTemplate('privacy-page', StandardPageTemplate)
CMS.registerPreviewTemplate('disclaimer', StandardPageTemplate)
CMS.registerPreviewTemplate('terms', StandardPageTemplate)
CMS.registerPreviewTemplate('updates', UpdatesPageTemplate)
CMS.registerPreviewTemplate('posts', SinglePostTemplate)
CMS.registerPreviewTemplate('casestudies', SingleCasestudyTemplate)
CMS.registerPreviewTemplate('careers', SingleCareerTemplate)
CMS.registerPreviewTemplate('services', SingleServiceTemplate)
CMS.registerPreviewTemplate('team',  SingleTeamTemplate)
