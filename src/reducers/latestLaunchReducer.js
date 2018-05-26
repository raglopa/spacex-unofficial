import {
  LATEST_LAUNCH_FETCH_FAILED,
  LATEST_LAUNCH_FETCH_REQUESTED,
  LATEST_LAUNCH_FETCH_SUCCEEDED
} from '../constants/action-types'

const initialRequestState = {
  success: false,
  pending: false,
  failed: false,
  errorMessage: null
}

const initialState = {
  data: null,
  requestState: { ...initialRequestState }
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case LATEST_LAUNCH_FETCH_REQUESTED: {
      return {
        ...state,
        requestState: {
          pending: true,
          success: false,
          failed: false,
          errorMessage: null
        }
      }
    }
    case LATEST_LAUNCH_FETCH_SUCCEEDED: {
      const { data } = action.payload

      return {
        ...state,
        data,
        requestState: {
          pending: false,
          success: true,
          failed: false,
          errorMessage: null
        }
      }
    }
    case LATEST_LAUNCH_FETCH_FAILED: {
      const { errorMessage } = action.payload
      return {
        ...state,
        requestState: {
          pending: false,
          success: false,
          failed: true,
          errorMessage
        }
      }
    }
    default:
      return state
  }
}

const data = [
  {
    flight_number: 1,
    mission_name: 'FalconSat',
    launch_year: '2006',
    launch_date_unix: 1143239400,
    launch_date_utc: '2006-03-24T22:30:00Z',
    launch_date_local: '2006-03-25T10:30:00+12:00',
    rocket: {
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'Merlin A',
      first_stage: {
        cores: [
          {
            core_serial: 'Merlin1A',
            flight: 1,
            block: null,
            reused: false,
            land_success: false,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'FalconSAT-2',
            reused: false,
            customers: ['DARPA'],
            payload_type: 'Satellite',
            payload_mass_kg: 20,
            payload_mass_lbs: 43,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island'
    },
    launch_success: false,
    links: {
      mission_patch: 'https://images2.imgbox.com/3f/53/avrsUsUg_o.png',
      mission_patch_small: 'https://images2.imgbox.com/dd/27/hcl56EiI_o.png',
      article_link:
        'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
      wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
      video_link: 'https://www.youtube.com/watch?v=0a_00nJ_Y88'
    },
    details: 'Engine failure at 33 seconds and loss of vehicle'
  },
  {
    flight_number: 2,
    mission_name: 'DemoSat',
    launch_year: '2007',
    launch_date_unix: 1174439400,
    launch_date_utc: '2007-03-21T01:10:00Z',
    launch_date_local: '2007-03-21T13:10:00+12:00',
    rocket: {
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'Merlin A',
      first_stage: {
        cores: [
          {
            core_serial: 'Merlin2A',
            flight: 1,
            block: null,
            reused: false,
            land_success: false,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'DemoSAT',
            reused: false,
            customers: ['DARPA'],
            payload_type: 'Satellite',
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island'
    },
    launch_success: false,
    links: {
      mission_patch: 'https://images2.imgbox.com/58/5a/TxqPwU6g_o.png',
      mission_patch_small: 'https://images2.imgbox.com/cc/6a/HsyemBpi_o.png',
      article_link:
        'https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html',
      wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
      video_link: 'https://www.youtube.com/watch?v=YMvQsmLv44o'
    },
    details:
      'Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage'
  },
  {
    flight_number: 3,
    mission_name: 'Trailblazer',
    launch_year: '2008',
    launch_date_unix: 1217648040,
    launch_date_utc: '2008-08-02T03:34:00Z',
    launch_date_local: '2008-08-02T15:34:00+12:00',
    rocket: {
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'Merlin C',
      first_stage: {
        cores: [
          {
            core_serial: 'Merlin1C',
            flight: 1,
            block: null,
            reused: false,
            land_success: false,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Trailblazer',
            reused: false,
            customers: ['NASA'],
            payload_type: 'Satellite',
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: 'LEO'
          },
          {
            payload_id: 'PRESat',
            reused: false,
            customers: ['ORS'],
            payload_type: 'Satellite',
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island'
    },
    launch_success: false,
    links: {
      mission_patch: 'https://images2.imgbox.com/2b/46/Okp9dkSQ_o.png',
      mission_patch_small: 'https://images2.imgbox.com/a6/7a/9cjBbIqj_o.png',
      article_link:
        'http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary',
      wikipedia: 'https://en.wikipedia.org/wiki/Trailblazer_(satellite)',
      video_link: 'https://www.youtube.com/watch?v=Qz0yJ8N3cA0'
    },
    details:
      'Residual stage 1 thrust led to collision between stage 1 and stage 2'
  },
  {
    flight_number: 4,
    mission_name: 'RatSat',
    launch_year: '2008',
    launch_date_unix: 1222643700,
    launch_date_utc: '2008-09-28T23:15:00Z',
    launch_date_local: '2008-09-28T11:15:00+12:00',
    rocket: {
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'Merlin C',
      first_stage: {
        cores: [
          {
            core_serial: 'Merlin2C',
            flight: 1,
            block: null,
            reused: false,
            land_success: false,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'RatSat',
            reused: false,
            customers: ['SpaceX'],
            payload_type: 'Satellite',
            payload_mass_kg: 165,
            payload_mass_lbs: 363,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/98/14/p2bsmda1_o.png',
      mission_patch_small: 'https://images2.imgbox.com/9c/3c/08gbW2Kd_o.png',
      article_link: 'https://en.wikipedia.org/wiki/Ratsat',
      wikipedia: 'https://en.wikipedia.org/wiki/Ratsat',
      video_link: 'https://www.youtube.com/watch?v=dLQ2tZEH6G0'
    },
    details:
      'Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1'
  },
  {
    flight_number: 5,
    mission_name: 'RazakSat',
    launch_year: '2009',
    launch_date_unix: 1247456100,
    launch_date_utc: '2009-07-13T03:35:00Z',
    launch_date_local: '2009-07-13T15:35:00+12:00',
    rocket: {
      rocket_id: 'falcon1',
      rocket_name: 'Falcon 1',
      rocket_type: 'Merlin C',
      first_stage: {
        cores: [
          {
            core_serial: 'Merlin3C',
            flight: 1,
            block: null,
            reused: false,
            land_success: false,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'RazakSAT',
            reused: false,
            customers: ['ATSB'],
            payload_type: 'Satellite',
            payload_mass_kg: 200,
            payload_mass_lbs: 440,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'kwajalein_atoll',
      site_name: 'Kwajalein Atoll',
      site_name_long: 'Kwajalein Atoll Omelek Island'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/53/64/C38QYIkO_o.png',
      mission_patch_small: 'https://images2.imgbox.com/80/cc/PGYxviI1_o.png',
      presskit:
        'http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit',
      article_link: 'http://www.spacex.com/news/2013/02/12/falcon-1-flight-5',
      wikipedia: 'https://en.wikipedia.org/wiki/RazakSAT',
      video_link: 'https://www.youtube.com/watch?v=WTFlFFrfEB0'
    },
    details: null
  },
  {
    flight_number: 6,
    mission_name: 'Falcon 9 Test Flight',
    launch_year: '2010',
    launch_date_unix: 1275677100,
    launch_date_utc: '2010-06-04T18:45:00Z',
    launch_date_local: '2010-06-04T14:45:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.0',
      first_stage: {
        cores: [
          {
            core_serial: 'B0003',
            flight: 1,
            block: 1,
            reused: false,
            land_success: false,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Dragon Qualification Unit',
            reused: false,
            customers: ['SpaceX'],
            payload_type: 'Dragon Boilerplate',
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/42/1f/DSMBafGN_o.png',
      mission_patch_small: 'https://images2.imgbox.com/25/23/lJWn6eUL_o.png',
      presskit:
        'http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=21869.0;attach=230821',
      article_link: 'http://www.spacex.com/news/2013/02/12/falcon-9-flight-1',
      wikipedia:
        'https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit',
      video_link: 'https://www.youtube.com/watch?v=nxSxgBKlYws'
    },
    details: null
  },
  {
    flight_number: 7,
    mission_name: 'COTS 1',
    launch_year: '2010',
    launch_date_unix: 1291822980,
    launch_date_utc: '2010-12-08T15:43:00Z',
    launch_date_local: '2010-12-08T11:43:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.0',
      first_stage: {
        cores: [
          {
            core_serial: 'B0004',
            flight: 1,
            block: 1,
            reused: false,
            land_success: false,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'COTS Demo Flight 1',
            cap_serial: 'C101',
            reused: false,
            customers: ['NASA(COTS)'],
            payload_type: 'Dragon 1.0',
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: 'LEO'
          },
          {
            payload_id: 'Cubesats',
            reused: false,
            customers: ['NRO'],
            payload_type: 'Satellite',
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/3f/b8/g2muGOzc_o.png',
      mission_patch_small: 'https://images2.imgbox.com/c1/fc/8yq7mrT0_o.png',
      presskit: 'http://www.spacex.com/files/downloads/cots1-20101206.pdf',
      article_link: 'https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1',
      video_link: 'https://www.youtube.com/watch?v=Q-ci9xIgNZM'
    },
    details: null
  },
  {
    flight_number: 8,
    mission_name: 'COTS 2',
    launch_year: '2012',
    launch_date_unix: 1335944640,
    launch_date_utc: '2012-05-02T07:44:00Z',
    launch_date_local: '2012-05-02T03:44:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.0',
      first_stage: {
        cores: [
          {
            core_serial: 'B0005',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'COTS Demo Flight 2',
            cap_serial: 'C102',
            reused: false,
            customers: ['NASA(COTS)'],
            payload_type: 'Dragon 1.0',
            payload_mass_kg: 525,
            payload_mass_lbs: 1157,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/ab/0a/KcIW9OCf_o.png',
      mission_patch_small: 'https://images2.imgbox.com/b3/e9/aJUnnE2B_o.png',
      presskit: 'https://www.nasa.gov/pdf/649910main_cots2_presskit_051412.pdf',
      article_link: 'https://en.wikipedia.org/wiki/Dragon_C2%2B',
      wikipedia: 'https://en.wikipedia.org/wiki/Dragon_C2%2B',
      video_link: 'https://www.youtube.com/watch?v=tpQzDbAY7yI'
    },
    details:
      'Launch was scrubbed on first attempt, second launch attempt was successful'
  },
  {
    flight_number: 9,
    mission_name: 'CRS-1',
    launch_year: '2012',
    launch_date_unix: 1349656500,
    launch_date_utc: '2012-10-08T00:35:00Z',
    launch_date_local: '2012-10-08T20:35:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.0',
      first_stage: {
        cores: [
          {
            core_serial: 'B0006',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-1',
            cap_serial: 'C103',
            reused: false,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.0',
            payload_mass_kg: 400,
            payload_mass_lbs: 881,
            orbit: 'ISS',
            mass_returned_kg: 905,
            mass_returned_lbs: 1995,
            flight_time_sec: 1728000,
            cargo_manifest: 'https://en.wikipedia.org/wiki/SpaceX_CRS-1#Payload'
          },
          {
            payload_id: 'Orbcomm-OG2',
            reused: false,
            customers: ['Orbcomm'],
            payload_type: 'Dragon 1.0',
            payload_mass_kg: 400,
            payload_mass_lbs: 881,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/8e/97/g69cJtLE_o.png',
      mission_patch_small: 'https://images2.imgbox.com/17/7a/9AoTW8Uz_o.png',
      presskit: 'https://www.nasa.gov/pdf/694166main_SpaceXCRS-1PressKit.pdf',
      article_link:
        'https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-1',
      video_link: 'https://www.youtube.com/watch?v=-Vk3hiV_zXU'
    },
    details:
      "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions."
  },
  {
    flight_number: 10,
    mission_name: 'CRS-2',
    launch_year: '2013',
    launch_date_unix: 1362165000,
    launch_date_utc: '2013-03-01T19:10:00Z',
    launch_date_local: '2013-03-01T15:10:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.0',
      first_stage: {
        cores: [
          {
            core_serial: 'B0007',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-2',
            cap_serial: 'C104',
            reused: false,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.0',
            payload_mass_kg: 677,
            payload_mass_lbs: 1492,
            orbit: 'ISS',
            mass_returned_kg: 1370,
            mass_returned_lbs: 3020,
            flight_time_sec: 2160000,
            cargo_manifest: 'https://en.wikipedia.org/wiki/SpaceX_CRS-2#Payload'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/62/38/rL0ek1OV_o.png',
      mission_patch_small: 'https://images2.imgbox.com/b2/89/hTr69E47_o.png',
      reddit_campaign: null,
      reddit_launch:
        'https://www.reddit.com/r/space/comments/19gm5f/live_coverage_spacex_crs2_launch_to_the_iss/c8nvah4',
      reddit_recovery: null,
      reddit_media: null,
      presskit:
        'https://www.nasa.gov/sites/default/files/files/Orb2_PRESS_KIT.pdf',
      article_link: 'https://en.wikipedia.org/wiki/SpaceX_CRS-2',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-2',
      video_link: 'https://www.youtube.com/watch?v=BqCELhkXtsY'
    },
    details: 'Last launch of the original Falcon 9 v1.0 launch vehicle'
  },
  {
    flight_number: 11,
    mission_name: 'CASSIOPE',
    launch_year: '2013',
    launch_date_unix: 1380470400,
    launch_date_utc: '2013-09-29T16:00:00Z',
    launch_date_local: '2013-09-29T09:00:00-07:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1003',
            flight: 1,
            block: 1,
            reused: false,
            land_success: false,
            landing_type: 'Ocean',
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'CASSIOPE',
            reused: false,
            customers: ['MDA'],
            payload_type: 'Satellite',
            payload_mass_kg: 500,
            payload_mass_lbs: 1100,
            orbit: 'PO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/56/c8/H5tOOEQv_o.png',
      mission_patch_small: 'https://images2.imgbox.com/e2/4e/9HDrHo2i_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/1ndlay',
      reddit_recovery: null,
      reddit_media: null,
      presskit:
        'https://spaceflightnow.com/falcon9/006/UpgradedF9DemoMission_PressKit.pdf',
      article_link:
        'http://www.parabolicarc.com/2013/09/29/falcon-9-launch-payloads-orbit-vandenberg/',
      wikipedia: 'https://en.wikipedia.org/wiki/CASSIOPE',
      video_link: 'https://www.youtube.com/watch?v=uFefasS6bhc'
    },
    details:
      'Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle.'
  },
  {
    flight_number: 12,
    mission_name: 'SES-8',
    launch_year: '2013',
    launch_date_unix: 1386110460,
    launch_date_utc: '2013-12-03T22:41:00Z',
    launch_date_local: '2013-12-03T18:41:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1004',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SES-8',
            reused: false,
            customers: ['SES'],
            payload_type: 'Satellite',
            payload_mass_kg: 3170,
            payload_mass_lbs: 6990,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/c2/8c/zF4oPg4h_o.png',
      mission_patch_small: 'https://images2.imgbox.com/75/b5/nF4aXmgv_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/1ryy1n',
      reddit_recovery: null,
      reddit_media: null,
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_ses-8launch_presskit.pdf',
      article_link:
        'https://www.nasaspaceflight.com/2013/12/spacex-falcon-9-v1-1-milestone-ses-8-launch/',
      wikipedia: 'https://en.wikipedia.org/wiki/SES-8',
      video_link: 'https://www.youtube.com/watch?v=aAj5xapImEs'
    },
    details: 'First GTO launch for Falcon 9'
  },
  {
    flight_number: 13,
    mission_name: 'Thaicom 6',
    launch_year: '2014',
    launch_date_unix: 1389031560,
    launch_date_utc: '2014-01-06T18:06:00Z',
    launch_date_local: '2014-01-06T14:06:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1005',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Thaicom 6',
            reused: false,
            customers: ['Thaicom'],
            payload_type: 'Satellite',
            payload_mass_kg: 3325,
            payload_mass_lbs: 7330,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/7d/9a/QTskWRL2_o.png',
      mission_patch_small: 'https://images2.imgbox.com/ce/c2/tRnAndoe_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/1ujoc0',
      reddit_recovery: null,
      reddit_media: null,
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_thaicom6_presskit.pdf',
      article_link:
        'http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/',
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom_6',
      video_link: 'https://www.youtube.com/watch?v=DjpUf__4vPA'
    },
    details:
      'Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had "unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff"'
  },
  {
    flight_number: 14,
    mission_name: 'CRS-3',
    launch_year: '2014',
    launch_date_unix: 1397849100,
    launch_date_utc: '2014-04-18T19:25:00Z',
    launch_date_local: '2014-04-18T15:25:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1006',
            flight: 1,
            block: 1,
            reused: false,
            land_success: true,
            landing_type: 'Ocean',
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-3',
            cap_serial: 'C105',
            reused: false,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2296,
            payload_mass_lbs: 5062,
            orbit: 'ISS',
            mass_returned_kg: 1600,
            mass_returned_lbs: 3500,
            flight_time_sec: 2592000,
            cargo_manifest:
              'https://en.wikipedia.org/wiki/SpaceX_CRS-3#Primary_payload_and_downmass'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/5f/e9/3bFb5Hxo_o.png',
      mission_patch_small: 'https://images2.imgbox.com/30/bc/zN2DR1if_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/22zo8c',
      reddit_recovery: null,
      reddit_media: null,
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacexcrs-3_presskit_042014.pdf',
      article_link: 'https://newatlas.com/crs-3-launch-spacex/31671/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-3',
      video_link: 'https://www.youtube.com/watch?v=65zDaDSvIww'
    },
    details:
      'Following second-stage separation, SpaceX conducted a second controlled-descent test of the discarded booster vehicle and achieved the first successful controlled ocean touchdown of a liquid-rocket-engine orbital booster. Following touchdown the first stage tipped over as expected and was destroyed. This was the first Falcon 9 booster to fly with extensible landing legs and the first Dragon mission with the Falcon 9 v1.1 launch vehicle.'
  },
  {
    flight_number: 15,
    mission_name: 'OG-2 Mission 1',
    launch_year: '2014',
    launch_date_unix: 1405350900,
    launch_date_utc: '2014-07-14T15:15:00Z',
    launch_date_local: '2014-07-14T11:15:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1007',
            flight: 1,
            block: 1,
            reused: false,
            land_success: true,
            landing_type: 'Ocean',
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Orbcomm-OG2-M1',
            reused: false,
            customers: ['Orbcomm'],
            payload_type: 'Satellite',
            payload_mass_kg: 1316,
            payload_mass_lbs: 2901,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/27/ec/dwexPjFs_o.png',
      mission_patch_small: 'https://images2.imgbox.com/3f/39/y0mIDKcI_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/2aany2',
      reddit_recovery: null,
      reddit_media: null,
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_orbcomm_presskit_final.pdf',
      article_link: 'https://www.orbcomm.com/en/networks/satellite/orbcomm-og2',
      wikipedia: 'https://en.wikipedia.org/wiki/Falcon_9_flight_10',
      video_link: 'https://www.youtube.com/watch?v=lbHnSu-DLR4'
    },
    details:
      'Total payload mass was 1,316 kg (2,901 lb) : 6 satellites weighing 172 kg each, plus two 142-kg mass simulators. This was the second Falcon 9 booster equipped with landing legs. Following second-stage separation, SpaceX conducted a controlled-descent test of the first stage, which successfully decelerated from hypersonic velocity in the upper atmosphere, made reentry and landing burns, deployed its legs and touched down on the ocean surface. As with the previous mission, the first stage then tipped over as expected and was not recovered.'
  },
  {
    flight_number: 16,
    mission_name: 'AsiaSat 8',
    launch_year: '2014',
    launch_date_unix: 1407225600,
    launch_date_utc: '2014-08-05T08:00:00Z',
    launch_date_local: '2014-08-05T04:00:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1008',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'AsiaSat 8',
            reused: false,
            customers: ['AsiaSat'],
            payload_type: 'Satellite',
            payload_mass_kg: 4535,
            payload_mass_lbs: 9998,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/2a/08/Xc36OwTr_o.png',
      mission_patch_small: 'https://images2.imgbox.com/fa/c0/zzyPSFfP_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/2fenrv',
      reddit_recovery: null,
      reddit_media: null,
      presskit: 'https://spaceflightnow.com/falcon9/011/presskit.pdf',
      article_link:
        'http://spacenews.com/41497spacex-launches-first-of-two-satellites-for-asiasat/',
      wikipedia: 'https://en.wikipedia.org/wiki/AsiaSat_8',
      video_link: 'https://www.youtube.com/watch?v=essrkMGlw5s'
    },
    details: null
  },
  {
    flight_number: 17,
    mission_name: 'AsiaSat 6',
    launch_year: '2014',
    launch_date_unix: 1410066000,
    launch_date_utc: '2014-09-07T05:00:00Z',
    launch_date_local: '2014-09-07T01:00:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1011',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'AsiaSat 6',
            reused: false,
            customers: ['AsiaSat'],
            payload_type: 'Satellite',
            payload_mass_kg: 4428,
            payload_mass_lbs: 9762,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/6e/19/5p96Doee_o.png',
      mission_patch_small: 'https://images2.imgbox.com/b5/b3/2DzXiQBR_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/2fenrv',
      reddit_recovery: null,
      reddit_media: null,
      presskit: 'https://www.spaceflightnow.com/falcon9/012/presskit.pdf',
      article_link:
        'https://www.space.com/27052-spacex-launches-asiasat6-satellite.html',
      wikipedia: 'https://en.wikipedia.org/wiki/AsiaSat_6',
      video_link: 'https://www.youtube.com/watch?v=39ninsyTRk8'
    },
    details: null
  },
  {
    flight_number: 18,
    mission_name: 'CRS-4',
    launch_year: '2014',
    launch_date_unix: 1411278720,
    launch_date_utc: '2014-09-21T05:52:00Z',
    launch_date_local: '2014-09-21T01:52:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1010',
            flight: 1,
            block: 1,
            reused: false,
            land_success: false,
            landing_type: 'Ocean',
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-4',
            cap_serial: 'C106',
            reused: true,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2216,
            payload_mass_lbs: 4885,
            orbit: 'ISS',
            mass_returned_kg: 1486,
            mass_returned_lbs: 3276,
            flight_time_sec: 2987160,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/files/SpaceX_CRS-4_Mission_Overview-1.pdf'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/fa/c7/01PclSWg_o.png',
      mission_patch_small: 'https://images2.imgbox.com/ec/31/JyL6TbPP_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/2grxer',
      reddit_recovery: null,
      reddit_media: null,
      presskit:
        'https://www.nasa.gov/sites/default/files/files/SpaceX_NASA_CRS-4_PressKit.pdf',
      article_link:
        'https://www.nasa.gov/press/2014/september/nasa-cargo-launches-to-space-station-aboard-spacex-resupply-mission-0',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-4',
      video_link: 'https://www.youtube.com/watch?v=7YkCh7uOw1Y'
    },
    details: null
  },
  {
    flight_number: 19,
    mission_name: 'CRS-5',
    launch_year: '2015',
    launch_date_unix: 1420883220,
    launch_date_utc: '2015-01-10T09:47:00Z',
    launch_date_local: '2015-01-10T05:47:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1012',
            flight: 1,
            block: 1,
            reused: false,
            land_success: false,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-5',
            cap_serial: 'C107',
            reused: false,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2395,
            payload_mass_lbs: 5280,
            orbit: 'ISS',
            mass_returned_kg: 1633,
            mass_returned_lbs: 3600,
            flight_time_sec: 2764800,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/files/SpaceX_CRS-5_factsheet.pdf'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/ec/f0/1hJW7luW_o.png',
      mission_patch_small: 'https://images2.imgbox.com/2b/5c/2Rg4FlLX_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/2rrdha',
      reddit_recovery: null,
      reddit_media: null,
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_nasa_crs-5_presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2015/01/10/dragon-successfully-launched-rocket-recovery-demo-crash-lands/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-5',
      video_link: 'https://www.youtube.com/watch?v=p7x-SumbynI'
    },
    details:
      "Following second stage separation, SpaceX performed a test flight which attempted to return the first stage of the Falcon 9 through the atmosphere and land it on an approximately 90-by-50-meter (300 ft x 160 ft) floating platform-called the autonomous spaceport drone ship. Many of the test objectives were achieved, including precision control of the rocket's descent to land on the platform at a specific point in the Atlantic ocean, and a large amount of test data was obtained from the first use of grid fin control surfaces used for more precise reentry positioning. The grid fin control system ran out of hydraulic fluid a minute before landing and the landing itself resulted in a crash."
  },
  {
    flight_number: 20,
    mission_name: 'DSCOVR',
    launch_year: '2015',
    launch_date_unix: 1423695780,
    launch_date_utc: '2015-02-11T23:03:00Z',
    launch_date_local: '2015-02-11T19:03:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1013',
            flight: 1,
            block: 1,
            reused: false,
            land_success: true,
            landing_type: 'Ocean',
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'DSCOVR',
            reused: false,
            customers: ['NASA', 'NOAA', 'USAF'],
            payload_type: 'Satellite',
            payload_mass_kg: 570,
            payload_mass_lbs: 1260,
            orbit: 'ES-L1'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/68/7c/uDRC9Shx_o.png',
      mission_patch_small: 'https://images2.imgbox.com/dc/d8/1fL3OMrc_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/2vjm9e',
      reddit_recovery: null,
      reddit_media: null,
      presskit: 'http://www.spacex.com/press/2015/02/11/dscovr-launch-update',
      article_link:
        'https://spaceflightnow.com/2015/02/12/space-weather-observatory-blasts-off-after-17-year-wait/',
      wikipedia: 'https://en.wikipedia.org/wiki/Deep_Space_Climate_Observatory',
      video_link: 'https://www.youtube.com/watch?v=OvHJSIKP0Hg'
    },
    details:
      "First launch under USAF's OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target."
  },
  {
    flight_number: 21,
    mission_name: 'ABS-3A / Eutelsat 115W B',
    launch_year: '2015',
    launch_date_unix: 1425268200,
    launch_date_utc: '2015-03-02T03:50:00Z',
    launch_date_local: '2015-03-02T23:50:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1014',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'ABS-3A',
            reused: false,
            customers: ['ABS'],
            payload_type: 'Satellite',
            payload_mass_kg: 1954,
            payload_mass_lbs: 4307,
            orbit: 'GTO'
          },
          {
            payload_id: 'Eutelsat 115 West B',
            reused: false,
            customers: ['Eutelsat'],
            payload_type: 'Satellite',
            payload_mass_kg: 2205,
            payload_mass_lbs: 4861,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/35/07/gz1weofq_o.png',
      mission_patch_small: 'https://images2.imgbox.com/9b/2d/gejD0lBY_o.png',
      reddit_campaign: null,
      reddit_launch: 'http://www.reddit.com/r/spacex/comments/2x81fc',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/2xmumx',
      presskit:
        'http://www.spacex.com/sites/spacex/files/abs-eutelsatfactsheet.pdf',
      article_link:
        'https://www.space.com/28702-spacex-rocket-launches-satellites-video.html',
      wikipedia: 'https://en.wikipedia.org/wiki/ABS-3A',
      video_link: 'https://www.youtube.com/watch?v=mN7lyaCBzT8'
    },
    details:
      "The launch was Boeing's first-ever conjoined launch of a lighter-weight dual-commsat stack that was specifically designed to take advantage of the lower-cost SpaceX Falcon 9 launch vehicle. Per satellite, launch costs were less than $30 million. The ABS satellite reached its final destination ahead of schedule and started operations on September 10."
  },
  {
    flight_number: 22,
    mission_name: 'CRS-6',
    launch_year: '2015',
    launch_date_unix: 1429042200,
    launch_date_utc: '2015-04-14T20:10:00Z',
    launch_date_local: '2015-04-14T16:10:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1015',
            flight: 1,
            block: 1,
            reused: false,
            land_success: false,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-6',
            reused: false,
            cap_serial: 'C108',
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 1898,
            payload_mass_lbs: 4184,
            orbit: 'ISS',
            mass_returned_kg: 1361,
            mass_returned_lbs: 3000,
            flight_time_sec: 3110400,
            cargo_manifest:
              'https://blogs.nasa.gov/spacex/wp-content/uploads/sites/227/2015/04/SpaceX_CRS-6_Mission_Overview.pdf'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: null },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/44/d8/jiQUrt03_o.png',
      mission_patch_small: 'https://images2.imgbox.com/59/4c/XkZI9ZAd_o.png',
      reddit_campaign: null,
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/32jnyd',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/32lw5y',
      presskit:
        'https://www.nasa.gov/sites/default/files/files/SpaceX_NASA_CRS-6_PressKit.pdf',
      article_link:
        'https://spaceflightnow.com/2015/04/14/falcon-9-successfully-launches-descends-to-off-balance-landing/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-6',
      video_link: 'https://www.youtube.com/watch?v=csVpa25iqH0'
    },
    details:
      'Following the first-stage boost, SpaceX attempted a controlled-descent test of the first stage. The first stage contacted the ship, but soon tipped over due to excess lateral velocity caused by a stuck throttle valve resulting in a later-than-intended downthrottle.'
  },
  {
    flight_number: 23,
    mission_name: 'TürkmenÄlem 52°E / MonacoSAT',
    launch_year: '2015',
    launch_date_unix: 1430175780,
    launch_date_utc: '2015-04-27T23:03:00Z',
    launch_date_local: '2015-04-27T19:03:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1016',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'TürkmenÄlem 52°E / MonacoSAT',
            reused: false,
            customers: ['Turkmenistan National Space Agency'],
            payload_type: 'Satellite',
            payload_mass_kg: 4707,
            payload_mass_lbs: 10377,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: null },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/dc/59/BEczaAcL_o.png',
      mission_patch_small: 'https://images2.imgbox.com/bc/b4/Y8jkPt0p_o.png',
      reddit_campaign: null,
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/33xqcj',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/3439s3',
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacexthalesfactsheet_final.pdf',
      article_link:
        'https://spaceflightnow.com/2015/04/28/falcon-9-rocket-powers-into-space-with-satellite-for-turkmenistan/',
      wikipedia:
        'https://en.wikipedia.org/wiki/T%C3%BCrkmen%C3%84lem_52%C2%B0E_/_MonacoSAT',
      video_link: 'https://www.youtube.com/watch?v=nBwAYT_ogj4'
    },
    details: null
  },
  {
    flight_number: 24,
    mission_name: 'CRS-7',
    launch_year: '2015',
    launch_date_unix: 1435501260,
    launch_date_utc: '2015-06-28T14:21:00Z',
    launch_date_local: '2015-06-28T10:21:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'v1.1',
      first_stage: {
        cores: [
          {
            core_serial: 'B1018',
            flight: 1,
            block: 1,
            reused: false,
            land_success: null,
            landing_type: 'ASDS',
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-7',
            reused: false,
            cap_serial: 'C109',
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2477,
            payload_mass_lbs: 5460.9,
            orbit: 'ISS',
            mass_returned_kg: null,
            mass_returned_lbs: null,
            flight_time_sec: 139,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-7_mission_overview.pdf'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: null },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: false,
    links: {
      mission_patch: 'https://images2.imgbox.com/5d/12/TKsYZW8K_o.png',
      mission_patch_small: 'https://images2.imgbox.com/29/43/Yd7tOM3R_o.png',
      reddit_campaign: null,
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/3b27hk',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/3berj3',
      presskit:
        'https://www.nasa.gov/sites/default/files/atoms/files/spacex_nasa_crs-7_presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2015/06/28/falcon-9-rocket-destroyed-in-launch-mishap/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-7',
      video_link: 'https://www.youtube.com/watch?v=PuNymhcTtSQ'
    },
    details:
      'Launch performance was nominal until an overpressure incident in the second-stage LOX tank, leading to vehicle breakup at T+150 seconds. The Dragon capsule survived the explosion but was lost upon splashdown because its software did not contain provisions for parachute deployment on launch vehicle failure.'
  },
  {
    flight_number: 25,
    mission_name: 'OG-2 Mission 2',
    launch_year: '2015',
    launch_date_unix: 1450747740,
    launch_date_utc: '2015-12-22T01:29:00Z',
    launch_date_local: '2015-12-22T21:29:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1019',
            flight: 1,
            block: 1,
            reused: false,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Orbcomm OG2',
            reused: true,
            customers: ['Orbcomm'],
            payload_type: 'Satellite',
            payload_mass_kg: 2034,
            payload_mass_lbs: 4484,
            orbit: 'LEO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=OG22' },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/37/70/1MjVgg9v_o.png',
      mission_patch_small: 'https://images2.imgbox.com/68/05/swjpBf4K_o.png',
      reddit_campaign: null,
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/3xgxh5',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/3xm83h/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_orbcomm_press_kit_final2.pdf',
      article_link:
        'https://spaceflightnow.com/2015/12/22/round-trip-rocket-flight-gives-spacex-a-trifecta-of-successes/',
      wikipedia: 'https://en.wikipedia.org/wiki/Falcon_9_flight_20',
      video_link: 'https://www.youtube.com/watch?v=O5bTbVbe4e4'
    },
    details:
      'Total payload mass was 2,034 kg (4,484 lb) : 11 satellites weighing 172 kg each, plus a 142-kg mass simulator. This was the first launch of the upgraded v1.1 variant (later called Falcon 9 Full Thrust), with a 30 percent power increase. Orbcomm had originally agreed to be the third flight of the enhanced-thrust rocket, but the change to the maiden flight position was announced in October 2015. SpaceX received a permit from the FAA to land the booster on solid ground at Cape Canaveral, and succeeded.'
  },
  {
    flight_number: 26,
    mission_name: 'Jason 3',
    launch_year: '2016',
    launch_date_unix: 1453045320,
    launch_date_utc: '2016-01-17T15:42:00Z',
    launch_date_local: '2016-01-17T08:42:00-07:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1017',
            flight: 1,
            block: 1,
            reused: false,
            land_success: false,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Jason-3',
            reused: false,
            customers: ['NASA', 'NOAA'],
            payload_type: 'Satellite',
            payload_mass_kg: 553,
            payload_mass_lbs: 1219,
            orbit: 'PO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=JSN3' },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/dc/90/v3Crn5q7_o.png',
      mission_patch_small: 'https://images2.imgbox.com/e4/9b/4IAiBkFS_o.png',
      reddit_campaign: null,
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/417weg',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/41cvdm',
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_jason3_press_kit.pdf',
      article_link:
        'https://spaceflightnow.com/2016/01/18/satellite-launched-to-measure-motions-of-the-oceans/',
      wikipedia: 'https://en.wikipedia.org/wiki/Jason-3',
      video_link: 'https://www.youtube.com/watch?v=ivdKRJzl6y0'
    },
    details:
      'First launch of NASA and NOAA joint science mission under the NLS II launch contract (not related to NASA CRS or USAF OSP3 contracts). Last launch of the original Falcon 9 v1.1 launch vehicle. The Jason-3 satellite was successfully deployed to target orbit. SpaceX again attempted a recovery of the first stage booster by landing on an autonomous drone ship; this time located in the Pacific Ocean. The first stage did achieve a soft-landing on the ship, but a lockout on one of the landing legs failed to latch, so that the booster fell over and exploded.'
  },
  {
    flight_number: 27,
    mission_name: 'SES-9',
    launch_year: '2016',
    launch_date_unix: 1457134500,
    launch_date_utc: '2016-03-04T23:35:00Z',
    launch_date_local: '2016-03-04T19:35:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1020',
            flight: 1,
            block: 1,
            reused: false,
            land_success: false,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SES-9',
            reused: false,
            customers: ['SES'],
            payload_type: 'Satellite',
            payload_mass_kg: 5271,
            payload_mass_lbs: 11621,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=SES9' },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/cb/bf/nnC1uUas_o.png',
      mission_patch_small: 'https://images2.imgbox.com/2b/9d/XdjFQ4Gz_o.png',
      reddit_campaign: null,
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/48u4yq',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/472k8c',
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_ses9_press_kit_final.pdf',
      article_link:
        'https://spaceflightnow.com/2016/03/05/tv-broadcasting-satellite-finally-launched-on-falcon-9/',
      wikipedia: 'https://en.wikipedia.org/wiki/SES-9',
      video_link: 'https://www.youtube.com/watch?v=muDPSyO7-A0'
    },
    details:
      'Second launch of the enhanced Falcon 9 Full Thrust launch vehicle. Following the launch, SpaceX attempted an experimental landing test to a drone ship, although a successful landing was not expected because launch mass exceeded previously indicated limit for a GTO there was little fuel left. As predicted, booster recovery failed: the spent first stage "landed hard", but the controlled-descent, atmospheric re-entry and navigation to the drone ship were successful and returned significant test data on bringing back high-energy Falcon 9s.'
  },
  {
    flight_number: 28,
    mission_name: 'CRS-8',
    launch_year: '2016',
    launch_date_unix: 1460148180,
    launch_date_utc: '2016-04-08T20:43:00Z',
    launch_date_local: '2016-04-08T16:43:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1021',
            flight: 1,
            block: 2,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-8',
            cap_serial: 'C110',
            reused: false,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 3136,
            payload_mass_lbs: 6914,
            orbit: 'ISS',
            mass_returned_kg: 1678,
            mass_returned_lbs: 3700,
            flight_time_sec: 2843280,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-8_mission_overview.pdf'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=CRS8' },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/19/d8/FP6sSMym_o.png',
      mission_patch_small: 'https://images2.imgbox.com/06/f8/z8sHGfF1_o.png',
      reddit_campaign: null,
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/4dtoly',
      reddit_recovery: 'https://www.reddit.com/r/spacex/comments/4ee2zy',
      reddit_media: 'https://www.reddit.com/r/spacex/comments/4dtpxn/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_crs8_press_kit.pdf',
      article_link:
        'https://spaceflightnow.com/2016/04/08/spacex-lands-rocket-on-floating-platform-after-station-resupply-launch/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-8',
      video_link: 'https://www.youtube.com/watch?v=7pUAydjne5M'
    },
    details:
      "Dragon carried over 1500 kg of supplies and delivered (stowed in its trunk) the inflatable Bigelow Expandable Activity Module (BEAM) to the ISS for two years of in-orbit tests. The rocket's first stage landed smoothly on SpaceX's autonomous spaceport drone ship 9 minutes after liftoff, making this the first ever successful landing of a rocket booster on a ship at sea as part of an orbital launch. The first stage B1021 was later also the first orbital booster to be used again, when launching SES-10 on March 30, 2017."
  },
  {
    flight_number: 29,
    mission_name: 'JCSAT-2B',
    launch_year: '2016',
    launch_date_unix: 1462512060,
    launch_date_utc: '2016-05-06T05:21:00Z',
    launch_date_local: '2016-05-06T01:21:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1022',
            flight: 1,
            block: 2,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'JCSAT-2B',
            reused: false,
            customers: ['SKY Perfect JSAT Group'],
            payload_type: 'Satellite',
            payload_mass_kg: 4696,
            payload_mass_lbs: 10353,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=JC14' },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/42/18/ZDouUwbo_o.png',
      mission_patch_small: 'https://images2.imgbox.com/d4/21/B8BQsnYg_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/4gyh8z',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/4htenu',
      reddit_recovery: 'https://www.reddit.com/r/spacex/comments/4ihp1p',
      reddit_media: 'https://www.reddit.com/r/spacex/comments/4htg2g',
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_jcsat_press_kit_final.pdf',
      article_link:
        'https://spaceflightnow.com/2016/05/06/falcon-9-succeeds-in-middle-of-the-night-launch/',
      wikipedia: 'https://en.wikipedia.org/wiki/JCSAT-2B',
      video_link: 'https://www.youtube.com/watch?v=L0bMeDj76ig'
    },
    details:
      'Launched the JCSAT 14 communications satellite for Tokyo-based SKY Perfect JSAT Corp. JCSAT 14 will support data networks, television broadcasters and mobile communications users in Japan, East Asia, Russia, Oceania, Hawaii and other Pacific islands. This was the first time a booster successfully landed after a GTO mission.'
  },
  {
    flight_number: 30,
    mission_name: 'Thaicom 8',
    launch_year: '2016',
    launch_date_unix: 1464385140,
    launch_date_utc: '2016-05-27T21:39:00Z',
    launch_date_local: '2016-05-27T17:39:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1023',
            flight: 1,
            block: 2,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Thaicom 8',
            reused: false,
            customers: ['Thaicom'],
            payload_type: 'Satellite',
            payload_mass_kg: 3100,
            payload_mass_lbs: 6800,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=THM8' },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/61/65/YxLAczvw_o.png',
      mission_patch_small: 'https://images2.imgbox.com/4a/d3/0fjmhn6h_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/4hjz4k',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/4l9uou',
      reddit_recovery: 'https://www.reddit.com/r/spacex/comments/4lz2y6',
      reddit_media: 'https://www.reddit.com/r/spacex/comments/4l4af1',
      presskit:
        'http://www.spacex.com/sites/spacex/files/spacex_thaicom_8_press_kit.pdf',
      article_link:
        'https://spaceflightnow.com/2016/05/27/spacex-logs-successful-late-afternoon-launch-for-thaicom/',
      wikipedia: 'https://en.wikipedia.org/wiki/Thaicom_8',
      video_link: 'https://www.youtube.com/watch?v=zBYC4f79iXc'
    },
    details:
      'Manufactured by Orbital ATK, the 3,100-kilogram (6,800 lb) Thaicom 8 communications satellite will serve Thailand, India and Africa from the 78.5° East geostationary location. It is equipped with 24 active Ku-band transponders.'
  },
  {
    flight_number: 31,
    mission_name: 'ABS-2A / Eutelsat 117W B',
    launch_year: '2016',
    launch_date_unix: 1466000940,
    launch_date_utc: '2016-06-15T14:29:00Z',
    launch_date_local: '2016-06-15T10:29:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1024',
            flight: 1,
            block: 2,
            reused: false,
            land_success: false,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'ABS-2A',
            reused: false,
            customers: ['ABS'],
            payload_type: 'Satellite',
            payload_mass_kg: 1800,
            payload_mass_lbs: 3950,
            orbit: 'GTO'
          },
          {
            payload_id: 'Eutelsat 117 West B',
            reused: false,
            customers: ['Eutelsat'],
            payload_type: 'Satellite',
            payload_mass_kg: 1800,
            payload_mass_lbs: 3950,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=EUA2' },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/10/ad/vhP3eJRY_o.png',
      mission_patch_small: 'https://images2.imgbox.com/ef/7e/Jm38cs5x_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/4ksdy3',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/4o5u6r',
      reddit_recovery: 'https://www.reddit.com/r/spacex/comments/4on75l',
      reddit_media: 'https://www.reddit.com/r/spacex/comments/4o5j6o',
      presskit: 'https://drive.google.com/open?id=0BwA3a65ef1OvMGpJSlpDNHhjelU',
      article_link:
        'https://spaceflightnow.com/2016/06/15/spacex-successfully-fires-satellites-into-orbit-but-loses-booster-on-landing/',
      wikipedia: 'https://en.wikipedia.org/wiki/ABS_(satellite_operator)',
      video_link: 'https://www.youtube.com/watch?v=gLNmtUEvI5A'
    },
    details:
      'One year after pioneering this technique on flight 16, Falcon again launched two Boeing 702SP gridded ion thruster satellites in a dual-stack configuration, with the two customers sharing the rocket and mission costs. First stage landing attempt on drone ship failed on landing due to low thrust on one of the three landing engines.'
  },
  {
    flight_number: 32,
    mission_name: 'CRS-9',
    launch_year: '2016',
    launch_date_unix: 1468817100,
    launch_date_utc: '2016-07-18T04:45:00Z',
    launch_date_local: '2016-07-18T00:45:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1025',
            flight: 1,
            block: 2,
            reused: false,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-9',
            cap_serial: 'C111',
            reused: false,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2257,
            payload_mass_lbs: 4976,
            orbit: 'ISS',
            mass_returned_kg: 1550,
            mass_returned_lbs: 3410,
            flight_time_sec: 3409380,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-9_mission_overview2.pdf'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=CRS9' },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/f3/d8/A7ujxxyF_o.png',
      mission_patch_small: 'https://images2.imgbox.com/28/84/AD5b9XBu_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/4ksedl',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/4t2umd/',
      reddit_recovery: 'https://www.reddit.com/r/spacex/comments/4znsvo',
      reddit_media: 'https://www.reddit.com/r/spacex/comments/4tayth',
      presskit: 'https://drive.google.com/open?id=0BwA3a65ef1OvM0JpSXdDUUJMRVk',
      article_link:
        'https://spaceflightnow.com/2016/07/18/spacex-sends-supplies-to-space-station-lands-another-falcon-rocket/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-9',
      video_link: 'https://www.youtube.com/watch?v=ThIdCuSsJh8'
    },
    details:
      'Among other cargo, an International Docking Adapter (IDA-2) was carried to the ISS. This mission had a successful first-stage landing at Cape Canaveral.*Including the reusable Dragon Capsule, total payload to orbit was 6457 kg.'
  },
  {
    flight_number: 33,
    mission_name: 'JCSAT-16',
    launch_year: '2016',
    launch_date_unix: 1471152360,
    launch_date_utc: '2016-08-14T05:26:00Z',
    launch_date_local: '2016-08-14T01:26:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1026',
            flight: 1,
            block: 2,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'JCSAT-16',
            reused: false,
            customers: ['SKY Perfect JCSAT Group'],
            payload_type: 'Satellite',
            payload_mass_kg: 4600,
            payload_mass_lbs: 10100,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=JC16' },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/03/65/Isb3R8hG_o.png',
      mission_patch_small: 'https://images2.imgbox.com/ac/44/uAA60rXi_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/4pv6ws',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/4xi7uq',
      reddit_recovery: 'https://www.reddit.com/r/spacex/comments/4y5xd1',
      reddit_media: 'https://www.reddit.com/r/spacex/comments/4xkdfj',
      presskit: 'https://drive.google.com/open?id=0BwA3a65ef1Ovb0FkYnE5dElZRlU',
      article_link:
        'https://spaceflightnow.com/2016/08/14/falcon-9-rocket-launches-japanese-satellite-then-nails-bullseye-landing/',
      wikipedia: 'https://en.wikipedia.org/wiki/JCSAT-16',
      video_link: 'https://www.youtube.com/watch?v=QZTCEO0gvLo'
    },
    details:
      'First attempt to touch down from a ballistic trajectory using a single-engine landing burn. All previous landings from a ballistic trajectory had fired three engines on the landing-burn, which provided more braking force, but subjected the vehicle to greater structural stresses. The single-engine landing burn takes more time and fuel, but puts less stress on the vehicle.'
  },
  {
    flight_number: 34,
    mission_name: 'Amos-6',
    launch_year: '2016',
    launch_date_unix: 1472735220,
    launch_date_utc: '2016-09-01T13:07:00Z',
    launch_date_local: '2016-09-01T09:07:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1028',
            flight: 1,
            block: 3,
            reused: false,
            land_success: null,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Amos-6',
            reused: false,
            customers: ['Spacecom'],
            payload_type: 'Satellite',
            payload_mass_kg: 5500,
            payload_mass_lbs: 12100,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: null },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: false,
    links: {
      mission_patch: 'https://images2.imgbox.com/50/d4/2ztAHYg6_o.png',
      mission_patch_small: 'https://images2.imgbox.com/3e/d3/aolF0Uae_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/4pv7jl',
      reddit_launch: null,
      reddit_recovery: null,
      reddit_media: null,
      presskit: null,
      article_link:
        'https://spaceflightnow.com/2016/09/01/spacex-rocket-and-israeli-satellite-destroyed-in-launch-pad-explosion/',
      wikipedia: 'https://en.wikipedia.org/wiki/Amos-6',
      video_link: 'https://www.youtube.com/watch?v=_BgJEXQkjNQ'
    },
    details:
      'The rocket and Amos-6 payload were lost in a launch pad explosion on September 1, 2016 during propellant fill prior to a static fire test. The pad was clear of personnel and there were no injuries.'
  },
  {
    flight_number: 35,
    mission_name: 'Iridium NEXT Mission 1',
    launch_year: '2017',
    launch_date_unix: 1484416440,
    launch_date_utc: '2017-01-14T17:54:00Z',
    launch_date_local: '2017-01-14T10:54:00-07:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1029',
            flight: 1,
            block: 3,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Iridium NEXT 1',
            reused: false,
            customers: ['Iridium Communications'],
            payload_type: 'Satellite',
            payload_mass_kg: 9600,
            payload_mass_lbs: 21200,
            orbit: 'PO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=IRD1' },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/4e/f9/aIIZn5bD_o.png',
      mission_patch_small: 'https://images2.imgbox.com/d0/65/YzcUvloB_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/5dii6z',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/5nsaqm',
      reddit_recovery: 'https://www.reddit.com/r/spacex/comments/5oe9kk',
      reddit_media: 'https://www.reddit.com/r/spacex/comments/5nsico',
      presskit: 'https://drive.google.com/open?id=0BwA3a65ef1OvZC1aU3FuMlQzalE',
      article_link:
        'https://spaceflightnow.com/2017/01/14/spacex-resumes-flights-with-on-target-launch-for-iridium/',
      wikipedia:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
      video_link: 'https://www.youtube.com/watch?v=7WimRhydggo'
    },
    details:
      'Return-to-flight mission after the loss of Amos-6 in September 2016. Iridium NEXT will replace the original Iridium constellation, launched in the late 1990s. Each Falcon mission will carry 10 satellites, with a goal to complete deployment of the 66 plus 9 spare satellite constellation by mid 2018. The first two Iridium qualification units were supposed to ride a Dnepr rocket in April 2016 but were delayed, so Iridium decided to qualify the first batch of 10 satellites instead.'
  },
  {
    flight_number: 36,
    mission_name: 'CRS-10',
    launch_year: '2017',
    launch_date_unix: 1487515140,
    launch_date_utc: '2017-02-19T14:39:00Z',
    launch_date_local: '2017-02-19T10:39:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1031',
            flight: 1,
            block: 3,
            reused: false,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-10',
            cap_serial: 'C112',
            reused: false,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2490,
            payload_mass_lbs: 5490,
            orbit: 'ISS',
            mass_returned_kg: 1652,
            mass_returned_lbs: 3642,
            flight_time_sec: 2419620,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-10_mission_overview.pdf'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=CR10' },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/de/47/h5zn9t4j_o.png',
      mission_patch_small: 'https://images2.imgbox.com/3a/f8/Ykvw2929_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/5n2eqx',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/5uw4bh',
      reddit_recovery: 'https://www.reddit.com/r/spacex/comments/609aq4',
      reddit_media: 'https://www.reddit.com/r/spacex/comments/5uoy8o',
      presskit:
        'http://www.spacex.com/sites/spacex/files/crs10presskitfinal.pdf',
      article_link:
        'https://spaceflightnow.com/2017/02/19/historic-launch-pad-back-in-service-with-thundering-blastoff-by-spacex/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-10',
      video_link: 'https://www.youtube.com/watch?v=giNhaEzv_PI'
    },
    details:
      'First Falcon 9 flight from the historic LC-39A launchpad at Kennedy Space Center, carrying supplies and materials to support dozens of science and research investigations scheduled during ISS Expeditions 50 and 51. The first stage returned to launch site and landed at LZ-1.'
  },
  {
    flight_number: 37,
    mission_name: 'EchoStar 23',
    launch_year: '2017',
    launch_date_unix: 1489644000,
    launch_date_utc: '2017-03-16T06:00:00Z',
    launch_date_local: '2017-03-16T02:00:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1030',
            flight: 1,
            block: 3,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'EchoStar 23',
            reused: false,
            customers: ['EchoStar'],
            payload_type: 'Satellite',
            payload_mass_kg: 5600,
            payload_mass_lbs: 12399,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=ES23' },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/11/f3/cmzkzGBK_o.png',
      mission_patch_small: 'https://images2.imgbox.com/d9/ac/0lBoXgCR_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/5n2e10/echostar_23_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/5z8dkm/welcome_to_the_rspacex_echostar23_official_launch/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/5z8if6/rspacex_echostar_23_media_thread_videos_images/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/echostarxxiiifinal.pdf',
      article_link: 'http://spacenews.com/spacex-launches-echostar-23/',
      wikipedia: 'https://en.wikipedia.org/wiki/EchoStar#Satellite_fleet',
      video_link: 'https://www.youtube.com/watch?v=lZmqbL-hz7U'
    },
    details:
      'Communications satellite for EchoStar Corp. EchoStar XXIII, based on a spare platform from the cancelled CMBStar 1 satellite program, will provide direct-to-home television broadcast services over Brazil. There was no attempt at a first-stage recovery so this rocket did not have landing legs or grid fins.'
  },
  {
    flight_number: 38,
    mission_name: 'SES-10',
    launch_year: '2017',
    launch_date_unix: 1490912820,
    launch_date_utc: '2017-03-30T22:27:00Z',
    launch_date_local: '2017-03-30T18:27:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1021',
            flight: 2,
            block: 2,
            reused: true,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SES-10',
            reused: false,
            customers: ['SES'],
            payload_type: 'Satellite',
            payload_mass_kg: 5300,
            payload_mass_lbs: 11700,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=SS10' },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/4d/cd/pRO9j7ws_o.png',
      mission_patch_small: 'https://images2.imgbox.com/be/be/qSjjoOQa_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/5sjrzj/ses10_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/62aqi7/rspacex_ses10_official_launch_discussion_updates/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/634gmr/b1021ses10_recovery_thread/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/62aqad/rspacex_ses10_media_thread_videos_images_gifs/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/finalses10presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2017/03/31/spacex-flies-rocket-for-second-time-in-historic-test-of-cost-cutting-technology/',
      wikipedia: 'https://en.wikipedia.org/wiki/SES-10',
      video_link: 'https://www.youtube.com/watch?v=xsZSXav4wI8'
    },
    details:
      'First payload to fly on a reused first stage, B1021, previously launched with CRS-8, which also landed a second time. In what is also a first, the payload fairing remained intact after a successful splashdown achieved with thrusters and a steerable parachute.'
  },
  {
    flight_number: 39,
    mission_name: 'NROL-76',
    launch_year: '2017',
    launch_date_unix: 1493637300,
    launch_date_utc: '2017-05-01T11:15:00Z',
    launch_date_local: '2017-05-01T07:15:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1032',
            flight: 1,
            block: 3,
            reused: false,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'NROL-76',
            reused: false,
            customers: ['NRO'],
            payload_type: 'Satellite',
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: 'LEO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: null },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/15/14/lJUIZuFQ_o.png',
      mission_patch_small: 'https://images2.imgbox.com/bd/54/G0jEWSYR_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/601ykx',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/68bn8y/',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/68bpii',
      presskit: 'http://www.spacex.com/sites/spacex/files/nrol76presskit.pdf',
      article_link:
        'https://techcrunch.com/2017/05/01/spacex-successfully-launches-nrol-76-u-s-military-satellite/',
      wikipedia: 'https://en.wikipedia.org/wiki/List_of_NRO_launches',
      video_link: 'https://www.youtube.com/watch?v=EzQpkQ1etdA'
    },
    details:
      "First launch under SpaceX's certification for national security space missions, which allows SpaceX to contract launch services for classified payloads. Second-stage speed and altitude telemetry were omitted from the launch webcast, which displayed first-stage telemetry instead, with continuous tracking of the booster from liftoff to landing for the first time."
  },
  {
    flight_number: 40,
    mission_name: 'Inmarsat-5 F4',
    launch_year: '2017',
    launch_date_unix: 1494890460,
    launch_date_utc: '2017-05-15T23:21:00Z',
    launch_date_local: '2017-05-15T19:21:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1034',
            flight: 1,
            block: 3,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Inmarsat-5 F4',
            reused: false,
            customers: ['Inmarsat'],
            payload_type: 'Satellite',
            payload_mass_kg: 6070,
            payload_mass_lbs: 13380,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=I5F4' },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/22/79/2Wp4LNVg_o.png',
      mission_patch_small: 'https://images2.imgbox.com/08/9b/tFdsAss9_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/64kguj/',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/6b88hz/',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/6bcf8j/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/inmarsat5f4presskit.pdf',
      article_link:
        'https://www.space.com/36852-spacex-launches-inmarsat-5-f4-satellite.html',
      wikipedia: 'https://en.wikipedia.org/wiki/Inmarsat#Satellites',
      video_link: 'https://www.youtube.com/watch?v=ynMYE64IEKs&t=1271s'
    },
    details:
      'At 6,070 kg this was the heaviest payload launched to GTO by a Falcon 9 rocket. The launch was originally scheduled for the Falcon Heavy, but performance improvements allowed the mission to be carried out by an expendable Falcon 9 instead.'
  },
  {
    flight_number: 41,
    mission_name: 'CRS-11',
    launch_year: '2017',
    launch_date_unix: 1496524020,
    launch_date_utc: '2017-06-03T21:07:00Z',
    launch_date_local: '2017-06-03T17:07:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1035',
            flight: 1,
            block: 3,
            reused: false,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-11',
            cap_serial: 'C106',
            reused: false,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2708,
            payload_mass_lbs: 5970,
            orbit: 'ISS',
            mass_returned_kg: 1900,
            mass_returned_lbs: 4100,
            flight_time_sec: 2559840,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-11_mission_overview.pdf'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: true
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=CR11' },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/30/77/XXy90Yyv_o.png',
      mission_patch_small: 'https://images2.imgbox.com/e7/c0/JwOHSNJj_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/68ul58/',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/6ektkt/',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/6emlzr/',
      presskit: 'http://www.spacex.com/sites/spacex/files/crs11presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2017/06/03/reused-dragon-cargo-capsule-launched-on-journey-to-space-station/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-11',
      video_link: 'https://www.youtube.com/watch?v=JuZBOUMsYws'
    },
    details:
      'This mission delivered the Neutron Star Interior Composition Explorer (NICER) to the ISS, along with the MUSES Earth imaging platform and ROSA solar array. For the first time, this mission launched a refurbished Dragon capsule, serial number C106 which first flew in September 2014 on the CRS-4 mission. Originally scheduled to launch on June 1, but was scrubbed due to inclement weather.'
  },
  {
    flight_number: 42,
    mission_name: 'BulgariaSat-1',
    launch_year: '2017',
    launch_date_unix: 1498245000,
    launch_date_utc: '2017-06-23T19:10:00Z',
    launch_date_local: '2017-06-23T15:10:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1029',
            flight: 2,
            block: 3,
            reused: true,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'BulgariaSat-1',
            reused: false,
            customers: ['Bulgaria Sat'],
            payload_type: 'Satellite',
            payload_mass_kg: 3669,
            payload_mass_lbs: 8089,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=BGS1' },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/95/bd/oiUMVRuW_o.png',
      mission_patch_small: 'https://images2.imgbox.com/fc/d9/HqjeWod0_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/69hhkm/bulgariasat1_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/6isph2/welcome_to_the_rspacex_bulgariasat1_official/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/6k3kop/b10292_bulgariasat_1_recovery_thread/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/6iuj1z/rspacex_bulgariasat1_media_thread_videos_images/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/bulgariasat1presskit.pdf',
      article_link: 'https://en.wikipedia.org/wiki/BulgariaSat-1',
      wikipedia: 'https://en.wikipedia.org/wiki/BulgariaSat-1',
      video_link: 'https://www.youtube.com/watch?v=Y8mLi-rRTh8'
    },
    details:
      'Second time a booster will be reused: Second flight of B1029 after the Iridium mission of January 2017. The satellite will be the first commercial Bulgarian-owned communications satellite and it will provide television broadcasts and other communications services over southeast Europe.'
  },
  {
    flight_number: 43,
    mission_name: 'Iridium NEXT Mission 2',
    launch_year: '2017',
    launch_date_unix: 1498397100,
    launch_date_utc: '2017-06-25T13:25:00Z',
    launch_date_local: '2017-06-25T06:25:00-07:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1036',
            flight: 1,
            block: 3,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Iridium NEXT 2',
            reused: false,
            customers: ['Iridium Communications'],
            payload_type: 'Satellite',
            payload_mass_kg: 9600,
            payload_mass_lbs: 21164,
            orbit: 'PO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=IRD2' },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/f6/27/tcJSKaA5_o.png',
      mission_patch_small: 'https://images2.imgbox.com/0e/0f/Tel30qZn_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/6bp4fj/',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/6j67ti/',
      reddit_recovery: 'https://www.reddit.com/r/spacex/comments/6k16ho/',
      reddit_media: 'https://www.reddit.com/r/spacex/comments/6j7va6/',
      presskit: 'http://www.spacex.com/sites/spacex/files/iridium2presskit.pdf',
      article_link:
        'https://www.space.com/37304-liftoff-spacex-second-launch-three-days.html',
      wikipedia:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation',
      video_link: 'https://www.youtube.com/watch?v=7tIwZg8F9b8'
    },
    details:
      'First flight with titanium grid fins to improve control authority and better cope with heat during re-entry.'
  },
  {
    flight_number: 44,
    mission_name: 'Intelsat 35e',
    launch_year: '2017',
    launch_date_unix: 1499297700,
    launch_date_utc: '2017-07-05T23:35:00Z',
    launch_date_local: '2017-07-05T19:35:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1037',
            flight: 1,
            block: 3,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Intelsat 35e',
            reused: false,
            customers: ['Intelsat'],
            payload_type: 'Satellite',
            payload_mass_kg: 6761,
            payload_mass_lbs: 14905.45,
            orbit: 'GTO'
          }
        ]
      }
    },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    telemetry: { flight_club: null },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/6b/9a/L4nRt4gK_o.png',
      mission_patch_small: 'https://images2.imgbox.com/63/99/qeutteBj_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/6fw4yy/',
      reddit_launch: 'https://www.reddit.com/r/spacex/comments/6kt2re/',
      reddit_recovery: null,
      reddit_media: 'https://www.reddit.com/r/spacex/comments/6kt3fe/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/intelsat35epresskit.pdf',
      article_link:
        'https://spaceflightnow.com/2017/07/06/spacex-delivers-for-intelsat-on-heavyweight-falcon-9-mission/',
      wikipedia: 'https://en.wikipedia.org/wiki/Intelsat_35e',
      video_link: 'https://www.youtube.com/watch?v=MIHVPCj25Z0'
    },
    details:
      'Due to the constraints of sending a heavy satellite (~6,000 kg) to GTO, the rocket will fly in its expendable configuration and the first-stage booster will not be recovered.'
  },
  {
    flight_number: 45,
    mission_name: 'CRS-12',
    launch_year: '2017',
    launch_date_unix: 1502728260,
    launch_date_utc: '2017-08-14T16:31:00Z',
    launch_date_local: '2017-08-14T12:31:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1039',
            flight: 1,
            block: 4,
            reused: false,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-12',
            reused: false,
            cap_serial: 'C113',
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2910,
            payload_mass_lbs: 6415.5,
            orbit: 'ISS',
            mass_returned_kg: 1724,
            mass_returned_lbs: 3800,
            flight_time_sec: 2842920,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-12_missionoverview.pdf'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=CR12' },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/fe/d0/yFIC4hBl_o.png',
      mission_patch_small: 'https://images2.imgbox.com/05/c4/FIg0Jrvr_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/6mrga2/crs12_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/6tfcio/welcome_to_the_rspacex_crs12_official_launch/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/6th2nf/rspacex_crs12_media_thread_videos_images_gifs/',
      presskit: 'http://www.spacex.com/sites/spacex/files/crs12presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2017/08/17/photos-falcon-9-rocket-soars-into-space-lands-back-at-cape-canaveral/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-12',
      video_link: 'https://www.youtube.com/watch?v=vLxWsYx8dbo'
    },
    details:
      'Dragon is expected to carry 2,349 kg (5,179 lb) of pressurized mass and 961 kg (2,119 lb) unpressurized. The external payload manifested for this flight is the CREAM cosmic-ray detector. First flight of the Falcon 9 Block 4 upgrade. Last flight of a newly-built Dragon capsule; further missions will use refurbished spacecraft.'
  },
  {
    flight_number: 46,
    mission_name: 'FormoSat-5',
    launch_year: '2017',
    launch_date_unix: 1503600600,
    launch_date_utc: '2017-08-24T18:50:00Z',
    launch_date_local: '2017-08-24T11:50:00-07:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1038',
            flight: 1,
            block: 3,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'FormoSat-5',
            reused: false,
            customers: ['NSPO (Taiwan)'],
            payload_type: 'Satellite',
            payload_mass_kg: 475,
            payload_mass_lbs: 1047,
            orbit: 'SSO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=FRM5' },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/50/09/91A31gPk_o.png',
      mission_patch_small: 'https://images2.imgbox.com/37/8f/nAdifLsS_o.png',
      reddit_campaign: 'https://www.reddit.com/r/spacex/comments/6o98st',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/6vihsl/welcome_to_the_rspacex_formosat5_official_launch/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/6wk653/b1038_recovery_thread/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/6vhwi1/rspacex_formosat5_media_thread_videos_images_gifs/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/formosat5presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2017/08/25/taiwanese-satellite-rides-spacex-rocket-into-orbit/',
      wikipedia: 'https://en.wikipedia.org/wiki/Formosat-5',
      video_link: 'https://www.youtube.com/watch?v=J4u3ZN2g_MI'
    },
    details:
      'Formosat-5 is an Earth observation satellite of the Taiwanese space agency. The SHERPA space tug by Spaceflight Industries was removed from the cargo manifest of this mission. The satellite has a mass of only 475 kg.'
  },
  {
    flight_number: 47,
    mission_name: 'Boeing X-37B OTV-5',
    launch_year: '2017',
    launch_date_unix: 1504792200,
    launch_date_utc: '2017-09-07T13:50:00Z',
    launch_date_local: '2017-09-07T09:50:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1040',
            flight: 1,
            block: 4,
            reused: false,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'X-37B OTV-5',
            reused: false,
            customers: ['USAF'],
            payload_type: 'Satellite',
            payload_mass_kg: 4990,
            payload_mass_lbs: 11001,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=OTV5' },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/58/b2/9VmFUk2c_o.png',
      mission_patch_small: 'https://images2.imgbox.com/cd/e9/gkLDWN64_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/6u6q1t/x37b_otv5_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/6ygmf1/rspacex_x37b_otv5_official_launch_discussion/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/6yih4g/rspacex_x37b_otv5_media_thread_videos_images_gifs/',
      presskit:
        'http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=43585.0;attach=1446501;sess=0',
      article_link:
        'https://spaceflightnow.com/2017/09/07/spacex-beats-hurricane-with-smooth-launch-of-militarys-x-37b-spaceplane/',
      wikipedia: 'https://en.wikipedia.org/wiki/Boeing_X-37',
      video_link: 'https://www.youtube.com/watch?v=9M6Zvi-fFv4'
    },
    details:
      'Notable because Boeing is the primary contractor of the X-37B, which has until now been launched by ULA, a SpaceX competitor and Boeing partnership. Second flight of the Falcon 9 Block 4 upgrade.'
  },
  {
    flight_number: 48,
    mission_name: 'Iridium NEXT Mission 3',
    launch_year: '2017',
    launch_date_unix: 1507552620,
    launch_date_utc: '2017-10-09T12:37:00Z',
    launch_date_local: '2017-10-09T05:37:00-07:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1041',
            flight: 1,
            block: 4,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'JRTI'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Iridium NEXT 3',
            reused: false,
            customers: ['Iridium Communications'],
            payload_type: 'Satellite',
            payload_mass_kg: 9600,
            payload_mass_lbs: 21164.4,
            orbit: 'PO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=IRD3' },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/54/f2/JfriDkBh_o.png',
      mission_patch_small: 'https://images2.imgbox.com/81/90/YicF1eqD_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/6ygwxw/iridium_next_constellation_mission_3_launch/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/753e0m/iridium_next_mission_3_official_launch_discussion/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/75z823/b10411_recovery_thread/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/755m2z/rspacex_iridium3_media_thread_videos_images_gifs/',
      presskit: 'http://www.spacex.com/sites/spacex/files/iridium3presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2017/10/09/spacex-launch-adds-another-10-satellites-to-iridium-next-fleet/',
      wikipedia:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
      video_link: 'https://www.youtube.com/watch?v=SB4N4xF2B2w&feature=youtu.be'
    },
    details:
      "Third of eight missions to launch Iridium's second generation constellation from VAFB"
  },
  {
    flight_number: 49,
    mission_name: 'SES-11 / Echostar 105',
    launch_year: '2017',
    launch_date_unix: 1507762380,
    launch_date_utc: '2017-10-11T22:53:00Z',
    launch_date_local: '2017-10-11T18:53:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1031',
            flight: 2,
            block: 3,
            reused: true,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SES-11 / Echostar 105',
            reused: false,
            customers: ['SES', 'Echostar'],
            payload_type: 'Satellite',
            payload_mass_kg: 5200,
            payload_mass_lbs: 11464,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=SS11' },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/13/e5/GbYfRyRQ_o.png',
      mission_patch_small: 'https://images2.imgbox.com/be/3a/9cdafTFk_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/6yvn64/ses11echostar_105_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/75bw7p/ses11echostar105_official_launch_discussions/',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/76fqz1/b10312_recovery_thread/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/75pgu5/rspacex_ses11_media_thread_videos_images_gifs/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/echostar105ses11presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2017/10/12/video-falcon-9-rocket-lifts-off-with-joint-satellite-for-ses-echostar/',
      wikipedia: 'https://en.wikipedia.org/wiki/List_of_SES_satellites',
      video_link: 'https://www.youtube.com/watch?v=iv1zeGSvhIw'
    },
    details:
      'Nineteenth comsat to GTO, also the fourth satellite launched for SES and second for Echostar. Third time a first stage booster will be reused.'
  },
  {
    flight_number: 50,
    mission_name: 'KoreaSat 5A',
    launch_year: '2017',
    launch_date_unix: 1509392040,
    launch_date_utc: '2017-10-30T19:34:00Z',
    launch_date_local: '2017-10-30T15:34:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1042',
            flight: 1,
            block: 4,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'KoreaSat 5A',
            reused: false,
            customers: ['KT Corporation'],
            payload_type: 'Satellite',
            payload_mass_kg: 3700,
            payload_mass_lbs: 8157.104,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/cd/12/ngCrFLgx_o.png',
      mission_patch_small: 'https://images2.imgbox.com/7e/9d/7NXzuI3R_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/73ttkd/koreasat_5a_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/79iuvb/rspacex_koreasat_5a_official_launch_discussion/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/79lmdu/rspacex_koreasat5a_media_thread_videos_images/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/koreasat5apresskit.pdf',
      article_link:
        'https://spaceflightnow.com/2017/10/30/spacex-launches-and-lands-third-rocket-in-three-weeks/',
      wikipedia: 'https://en.wikipedia.org/wiki/Koreasat_5A',
      video_link: 'https://www.youtube.com/watch?v=RUjH14vhLxA'
    },
    details:
      'KoreaSat 5A is a Ku-band satellite capable of providing communication services from East Africa and Central Asia to southern India, Southeast Asia, the Philippines, Guam, Korea, and Japan. The satellite will be placed in GEO at 113Â° East Longitude, and will provide services ranging from broadband internet to broadcasting services and maritime communications.'
  },
  {
    flight_number: 51,
    mission_name: 'CRS-13',
    launch_year: '2017',
    launch_date_unix: 1513352160,
    launch_date_utc: '2017-12-15T15:36:00Z',
    launch_date_local: '2017-12-15T10:36:00-05:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1035',
            flight: 2,
            block: 3,
            reused: true,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-13',
            cap_serial: 'C108',
            reused: true,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2205,
            payload_mass_lbs: 4861.2,
            orbit: 'ISS',
            mass_returned_kg: 1859.7,
            mass_returned_lbs: 4100,
            flight_time_sec: 2375340,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-13_mision_overview_low_res8.pdf'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=CR13' },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: true
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/f9/68/ZpwXQrOT_o.png',
      mission_patch_small: 'https://images2.imgbox.com/68/c5/AgE1uMS3_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/7bxg5a/crs13_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/7j725w/rspacex_crs13_official_launch_discussion_updates/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/7j6oxz/rspacex_crs13_media_thread_videos_images_gifs/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/crs13presskit12_11.pdf',
      article_link:
        'https://spaceflightnow.com/2017/12/15/spacexs-50th-falcon-rocket-launch-kicks-off-station-resupply-mission/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-13',
      video_link: 'https://www.youtube.com/watch?v=OPHbqY9LHCs'
    },
    details:
      'Will reuse the Dragon capsule previously flown on CRS-6 and will reuse the booster from CRS-11.'
  },
  {
    flight_number: 52,
    mission_name: 'Iridium NEXT Mission 4',
    launch_year: '2017',
    launch_date_unix: 1513992443,
    launch_date_utc: '2017-12-23T01:27:23Z',
    launch_date_local: '2017-12-22T17:27:23-08:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1036',
            flight: 2,
            block: 3,
            reused: true,
            land_success: true,
            landing_type: 'Ocean',
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Iridium NEXT 4',
            reused: false,
            customers: ['Iridium Communications'],
            payload_type: 'Satellite',
            payload_mass_kg: 9600,
            payload_mass_lbs: 21164.38,
            orbit: 'PO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/result?code=IRD4' },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/99/9e/9bJHfQbG_o.png',
      mission_patch_small: 'https://images2.imgbox.com/aa/4d/VkhShiQY_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/7cgts7/iridium_next_constellation_mission_4_launch/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/7li8y2/rspacex_iridium_next_4_official_launch_discussion/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/7litv2/rspacex_iridium4_media_thread_videos_images_gifs/',
      presskit: 'http://www.spacex.com/sites/spacex/files/iridium4presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2017/12/23/spacex-launch-dazzles-delivering-10-more-satellites-for-iridium/',
      wikipedia:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
      video_link: 'https://www.youtube.com/watch?v=wtdjCwo6d3Q'
    },
    details:
      'Reusing the booster first used on Iridium-2, but will be flying expendable.'
  },
  {
    flight_number: 53,
    mission_name: 'ZUMA',
    launch_year: '2018',
    launch_date_unix: 1515373200,
    launch_date_utc: '2018-01-08T01:00:00Z',
    launch_date_local: '2018-01-07T20:00:00-05:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1043',
            flight: 1,
            block: 4,
            reused: false,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'ZUMA',
            reused: false,
            customers: ['Northrop Grumman'],
            payload_type: 'Satellite',
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: 'LEO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/result?code=ZUMA' },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/9e/c9/oGjKkLfZ_o.png',
      mission_patch_small: 'https://images2.imgbox.com/3f/c7/zPZLsj4q_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/7895bo/zuma_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/7oqjf0/rspacex_zuma_official_launch_discussion_updates/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/7orksl/rspacex_zuma_media_thread_videos_images_gifs/',
      presskit: 'http://www.spacex.com/sites/spacex/files/zumapresskit.pdf',
      article_link:
        'https://spaceflightnow.com/2018/01/08/spacex-kicks-off-ambitious-2018-schedule-with-launch-for-u-s-government/',
      wikipedia: 'https://en.wikipedia.org/wiki/Zuma_(satellite)',
      video_link: 'https://www.youtube.com/watch?v=0PWu3BRxn60'
    },
    details:
      'Originally planned for mid-November 2017, the mission was delayed due to test results from the fairing of another customer. First-stage booster will attempt landing at LZ-1'
  },
  {
    flight_number: 54,
    mission_name: 'SES-16 / GovSat-1',
    launch_year: '2018',
    launch_date_unix: 1517433900,
    launch_date_utc: '2018-01-31T21:25:00Z',
    launch_date_local: '2018-01-31T16:25:00-05:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1032',
            flight: 2,
            block: 3,
            reused: true,
            land_success: true,
            landing_type: 'Ocean',
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'GovSat-1',
            reused: false,
            customers: ['GovSat'],
            payload_type: 'Satellite',
            payload_mass_kg: 4230,
            payload_mass_lbs: 9325.6,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/2a/e9/MBYXwY4I_o.png',
      mission_patch_small: 'https://images2.imgbox.com/03/e5/a83T7qdV_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/7olw86/govsat1_ses16_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/7tvtbh/rspacex_govsat1_official_launch_discussion/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/7tzzwy/rspacex_govsat1_media_thread_videos_images_gifs/',
      presskit: 'http://www.spacex.com/sites/spacex/files/govsat1presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2018/01/31/spacex-rocket-flies-on-60th-anniversary-of-first-u-s-satellite-launch/',
      wikipedia:
        'https://en.wikipedia.org/wiki/List_of_SES_satellites#SES_Fleet',
      video_link: 'https://www.youtube.com/watch?v=ScYUA51-POQ'
    },
    details:
      'Reused booster from the classified NROL-76 mission in May 2017. Following a successful experimental ocean landing that used three engines, the booster unexpectedly remained intact; Elon Musk stated in a tweet that SpaceX will attempt to tow the booster to shore.'
  },
  {
    flight_number: 55,
    mission_name: 'Falcon Heavy Test Flight',
    launch_year: '2018',
    launch_date_unix: 1517949900,
    launch_date_utc: '2018-02-06T20:45:00Z',
    launch_date_local: '2018-02-06T15:45:00-05:00',
    rocket: {
      rocket_id: 'falconheavy',
      rocket_name: 'Falcon Heavy',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1033',
            flight: 1,
            block: 3,
            reused: false,
            land_success: false,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          },
          {
            core_serial: 'B1025',
            flight: 2,
            block: 2,
            reused: true,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-2'
          },
          {
            core_serial: 'B1023',
            flight: 2,
            block: 2,
            reused: true,
            land_success: true,
            landing_type: 'RTLS',
            landing_vehicle: 'LZ-1'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Tesla Roadster',
            reused: false,
            customers: ['SpaceX'],
            payload_type: 'Satellite',
            payload_mass_kg: 1350,
            payload_mass_lbs: 2976.2,
            orbit: 'HCO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/result?code=FHD1' },
    reuse: {
      core: false,
      side_core1: true,
      side_core2: true,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/e9/54/Ui1nFsa8_o.png',
      mission_patch_small: 'https://images2.imgbox.com/80/ae/1rsLFswn_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/7hjp03/falcon_heavy_demo_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/7vg63x/rspacex_falcon_heavy_test_flight_official_launch/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/7vimtm/rspacex_falcon_heavy_test_flight_media_thread/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/falconheavypresskit_v1.pdf',
      article_link:
        'https://spaceflightnow.com/2018/02/07/spacex-debuts-worlds-most-powerful-rocket-sends-tesla-toward-the-asteroid-belt/',
      wikipedia: 'https://en.wikipedia.org/wiki/Elon_Musk%27s_Tesla_Roadster',
      video_link: 'https://www.youtube.com/watch?v=wbSwFU6tY1c'
    },
    details:
      'The launch was a success, and the side boosters landed simultaneously at adjacent ground pads. Drone ship landing of the central core failed. Final burn to heliocentric mars-earth orbit was successful after the second stage and payload passed through the Van Allen belts.'
  },
  {
    flight_number: 56,
    mission_name: 'Paz / Starlink Demo',
    launch_year: '2018',
    launch_date_unix: 1519309020,
    launch_date_utc: '2018-02-22T14:17:00Z',
    launch_date_local: '2018-02-22T06:17:00-08:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1038',
            flight: 2,
            block: 3,
            reused: true,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Paz',
            reused: false,
            customers: ['HisdeSAT'],
            payload_type: 'Satellite',
            payload_mass_kg: 1350,
            payload_mass_lbs: 2976.2,
            orbit: 'SSO'
          },
          {
            payload_id: 'Microsat-2a, -2b',
            reused: false,
            customers: ['SpaceX'],
            payload_type: 'Satellite',
            payload_mass_kg: 800,
            payload_mass_lbs: 1763.7,
            orbit: 'SSO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/result?code=PAZ1' },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/8c/28/8IoD0Gbc_o.png',
      mission_patch_small: 'https://images2.imgbox.com/02/54/rDJ6s79U_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/7qnflk/paz_microsat2a_2b_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/7y0grt/rspacex_paz_official_launch_discussion_updates/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/7zdvop/rspacex_paz_media_thread_videos_images_gifs/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/paz_press_kit_2.21.pdf',
      article_link:
        'https://spaceflightnow.com/2018/02/22/recycled-spacex-rocket-boosts-paz-radar-satellite-first-starlink-testbeds-into-orbit/',
      wikipedia: 'https://en.wikipedia.org/wiki/Paz_(satellite)',
      video_link: 'https://www.youtube.com/watch?v=-p-PToD2URA'
    },
    details:
      'First flight with fairing 2.0. Will also carry two SpaceX test satellites for the upcoming Starlink constellation.'
  },
  {
    flight_number: 57,
    mission_name: 'Hispasat 30W-6',
    launch_year: '2018',
    launch_date_unix: 1520314380,
    launch_date_utc: '2018-03-06T05:33:00Z',
    launch_date_local: '2018-03-06T00:33:00-05:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1044',
            flight: 1,
            block: 4,
            reused: false,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Hispasat 30W-6',
            reused: false,
            customers: ['Hispasat'],
            payload_type: 'Satellite',
            payload_mass_kg: 6092,
            payload_mass_lbs: 13430.6,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/c5/9e/RAOH0S2c_o.png',
      mission_patch_small: 'https://images2.imgbox.com/7f/db/iCovszZi_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/7r5pyn/hispasat_30w6_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/7r5pyn/hispasat_30w6_launch_campaign_thread/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/825asx/rspacex_hispasat_30w6_media_thread_videos_images/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/hispasat30w6_presskit.pdf',
      article_link:
        'https://spaceflightnow.com/2018/03/06/hefty-hispasat-satellite-rides-spacex-rocket-into-orbit/',
      wikipedia: 'https://en.wikipedia.org/wiki/Hispasat_30W-6',
      video_link: 'https://www.youtube.com/watch?v=Kpfrp-GMKKM'
    },
    details:
      "Launched with landing legs and titanium grid fins. Did not attempt a landing due to 'unfavorable weather conditions in the recovery area'."
  },
  {
    flight_number: 58,
    mission_name: 'Iridium NEXT Mission 5',
    launch_year: '2018',
    launch_date_unix: 1522419231,
    launch_date_utc: '2018-03-30T14:13:51Z',
    launch_date_local: '2018-03-30T07:13:51-08:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1041',
            flight: 2,
            block: 4,
            reused: true,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Iridium NEXT 5',
            reused: false,
            customers: ['Iridium Communications'],
            payload_type: 'Satellite',
            payload_mass_kg: 9600,
            payload_mass_lbs: 21164.38,
            orbit: 'PO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=IRD5' },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/ec/ee/6tmM3Mug_o.png',
      mission_patch_small: 'https://images2.imgbox.com/08/24/bnZYJqWa_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/82njj5/iridium_next_constellation_mission_5_launch/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/88184i/rspacex_iridium_next_5_official_launch_discussion/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/88114l/rspacex_iridium5_media_thread_videos_images_gifs/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/iridium-5_press_kit.pdf',
      article_link:
        'https://spaceflightnow.com/2018/03/30/iridium-messaging-network-gets-another-boost-from-spacex/',
      wikipedia:
        'https://en.wikipedia.org/wiki/Iridium_satellite_constellation#Next-generation_constellation',
      video_link: 'https://www.youtube.com/watch?v=mp0TW8vkCLg'
    },
    details:
      "Fifth Iridium NEXT mission to deploy ten Iridium NEXT satellites. Reused booster from third Iridium flight, and although controlled descent was performed, the booster was expended into the ocean. SpaceX planned a second recovery attempt of one half of the fairing using the specially modified boat Mr. Steven. However, the fairing's parafoil twisted during the recovery, which led to water impact at high speed"
  },
  {
    flight_number: 59,
    mission_name: 'CRS-14',
    launch_year: '2018',
    launch_date_unix: 1522701041,
    launch_date_utc: '2018-04-02T20:30:41Z',
    launch_date_local: '2018-04-02T16:30:41-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1039',
            flight: 2,
            block: 4,
            reused: true,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-14',
            cap_serial: 'C110',
            reused: true,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2760,
            payload_mass_lbs: 6084.7,
            orbit: 'ISS',
            mass_returned_kg: 1743,
            mass_returned_lbs: 3843,
            flight_time_sec: 3862140,
            cargo_manifest:
              'https://www.nasa.gov/sites/default/files/atoms/files/spacex_crs-14_mision_overview_high_res.pdf'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=CR14' },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: true
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/c4/b7/i31M8hSM_o.png',
      mission_patch_small: 'https://images2.imgbox.com/59/7f/lVYK3KuF_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/82op7a/crs14_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/88s8a7/rspacex_crs14_official_launch_discussion_updates/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/88l52i/rspacex_crs14_media_thread_videos_images_gifs/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/crs-14presskit2018.pdf',
      article_link:
        'https://spaceflightnow.com/2018/04/02/spacex-supply-ship-departs-cape-canaveral-for-space-station/',
      wikipedia: 'https://en.wikipedia.org/wiki/SpaceX_CRS-14',
      video_link: 'https://www.youtube.com/watch?v=BPQHG-LevZM'
    },
    details:
      'The launch used a refurbished booster (from CRS-12) for the 11th time, and a refurbished capsule (C110 from CRS-8) for the third time. External payloads include a materials research platform MISSE-FF phase 3 of the Robotic Refueling Mission TSIS, heliophysics sensor several crystallization experiments, and the RemoveDebris spacecraft aimed at space junk removal. The booster was expended in order to test a new landing profile.'
  },
  {
    flight_number: 60,
    mission_name: 'TESS',
    launch_year: '2018',
    launch_date_unix: 1524091860,
    launch_date_utc: '2018-04-18T22:51:00Z',
    launch_date_local: '2018-04-18T18:51:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1045',
            flight: 1,
            block: 4,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'TESS',
            reused: false,
            customers: ['NASA'],
            payload_type: 'Satellite',
            payload_mass_kg: 350,
            payload_mass_lbs: 772,
            orbit: 'HEO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/results/?code=TESS' },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/1f/13/kR2sdzO4_o.png',
      mission_patch_small: 'https://images2.imgbox.com/f3/cd/Ub2z4QHa_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/88l46q/tess_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/8cm61o/rspacex_tess_official_launch_discussion_updates/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/8cmzop/rspacex_tess_media_thread_videos_images_gifs/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/tesspresskitfinal417.pdf',
      article_link:
        'https://spaceflightnow.com/2018/04/19/all-sky-surveyor-launched-from-cape-canaveral-on-the-hunt-for-exoplanets/',
      wikipedia:
        'https://en.wikipedia.org/wiki/Transiting_Exoplanet_Survey_Satellite',
      video_link: 'https://www.youtube.com/watch?v=aY-0uBIYYKk'
    },
    details:
      "Part of the Explorers program, this space telescope is intended for wide-field search of exoplanets transiting nearby stars. It is the first NASA high priority science mission launched by SpaceX. It was the first time SpaceX launched a scientific satellite not primarily intended for Earth observations. The second stage placed it into a high-Earth elliptical orbit, after which the satellite's own booster will perform complex maneuvers including a lunar flyby, and over the course of two months, reach a stable, 2:1 resonant orbit with the Moon. In January 2018, SpaceX received NASA's Launch Services Program Category 2 certification of its Falcon 9 'Full Thrust', certification which is required for launching medium risk missions like TESS. It was the last launch of a new Block 4 booster, and marked the 24th successful recovery of the booster. An experimental water landing was performed in order to attempt fairing recovery."
  },
  {
    flight_number: 61,
    mission_name: 'Bangabandhu-1',
    launch_year: '2018',
    launch_date_unix: 1526069640,
    launch_date_utc: '2018-05-11T20:14:00Z',
    launch_date_local: '2018-05-11T16:14:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1046',
            flight: 1,
            block: 5,
            reused: false,
            land_success: true,
            landing_type: 'ASDS',
            landing_vehicle: 'OCISLY'
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Bangabandhu-1',
            reused: false,
            customers: ['Bangladesh Gov'],
            payload_type: 'Satellite',
            payload_mass_kg: 3750,
            payload_mass_lbs: 8270,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/result?code=BNG1' },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ksc_lc_39a',
      site_name: 'KSC LC 39A',
      site_name_long: 'Kennedy Space Center Historic Launch Complex 39A'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/07/15/dD7LXPVF_o.png',
      mission_patch_small: 'https://images2.imgbox.com/64/33/NuiM3QU1_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/8624iq/bangabandhu1_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/8ia091/rspacex_bangabandhu1_official_launch_discussion',
      reddit_recovery:
        'https://www.reddit.com/r/spacex/comments/8j6moa/bangabandhu1_block_5_recovery_thread/',
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/8ia5bu/rspacex_bangabandhu1_media_thread_videos_images/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/bangabandhupresskit51118.pdf',
      article_link:
        'https://spaceflightnow.com/2018/05/11/spacex-debuts-an-improved-human-rated-model-of-the-falcon-9-rocket/',
      wikipedia: 'https://en.wikipedia.org/wiki/Bangabandhu-1',
      video_link: 'https://www.youtube.com/watch?v=rQEqKZ7CJlk'
    },
    details: 'First launch of a Block V first stage.'
  },
  {
    flight_number: 62,
    mission_name: 'Iridium NEXT Mission 6',
    launch_year: '2018',
    launch_date_unix: 1527018478,
    launch_date_utc: '2018-05-22T19:47:58Z',
    launch_date_local: '2018-05-22T12:47:58-08:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1043',
            flight: 2,
            block: 4,
            reused: true,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Iridium NEXT 6',
            reused: false,
            customers: ['Iridium Communications'],
            payload_type: 'Satellite',
            payload_mass_kg: 4300,
            payload_mass_lbs: 9479.9,
            orbit: 'PO'
          },
          {
            payload_id: 'GRACE-FO 1-2',
            reused: false,
            customers: ['NASA', 'DLR'],
            payload_type: 'Satellite',
            payload_mass_kg: 1160,
            payload_mass_lbs: 2557.4,
            orbit: 'PO'
          }
        ]
      }
    },
    telemetry: { flight_club: 'https://www.flightclub.io/result?code=IRD6' },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: true,
    links: {
      mission_patch: 'https://images2.imgbox.com/55/c2/l3BqVwEj_o.png',
      mission_patch_small: 'https://images2.imgbox.com/02/5c/d5zmduUG_o.png',
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/8ffsgl/iridium6_gracefo_launch_campaign_thread/',
      reddit_launch:
        'https://www.reddit.com/r/spacex/comments/8kyk5a/rspacex_iridium_next_6_official_launch_discussion/',
      reddit_recovery: null,
      reddit_media:
        'https://www.reddit.com/r/spacex/comments/8l9tfz/rspacex_iridium6gracefo_media_thread_videos/',
      presskit:
        'http://www.spacex.com/sites/spacex/files/iridium6presskit2018521.pdf',
      article_link:
        'https://spaceflightnow.com/2018/05/22/rideshare-launch-by-spacex-serves-commercial-and-scientific-customers/',
      wikipedia:
        'https://en.wikipedia.org/wiki/Gravity_Recovery_and_Climate_Experiment',
      video_link: 'https://www.youtube.com/watch?v=I_0GgKfwCSk'
    },
    details:
      'GFZ arranged a rideshare of GRACE-FO on a Falcon 9 with Iridium following the cancellation of their Dnepr launch contract in 2015. Iridium CEO Matt Desch disclosed in September 2017 that GRACE-FO would be launched on the sixth Iridium NEXT mission. The booster reuse turnaround was a record 4.5 months between flights.'
  },
  {
    flight_number: 63,
    mission_name: 'SES-12',
    launch_year: '2018',
    launch_date_unix: 1527740940,
    launch_date_utc: '2018-05-31T04:29:00.000Z',
    launch_date_local: '2018-05-31T00:29:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1040',
            flight: 2,
            block: 4,
            reused: true,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SES-12',
            reused: false,
            customers: ['SES'],
            payload_type: 'Satellite',
            payload_mass_kg: 5300,
            payload_mass_lbs: null,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: true,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: null,
    links: {
      mission_patch: null,
      mission_patch_small: null,
      reddit_campaign:
        'https://www.reddit.com/r/spacex/comments/8jv0ed/ses12_launch_campaign_thread/',
      reddit_launch: null,
      reddit_recovery: null,
      reddit_media: null,
      presskit: null,
      article_link: null,
      wikipedia: null,
      video_link: null
    },
    details: null
  },
  {
    flight_number: 64,
    mission_name: 'Telstar 19V',
    launch_year: '2018',
    launch_date_unix: 1529193600,
    launch_date_utc: '2018-06-17T00:00:00Z',
    launch_date_local: '2018-06-17T00:00:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: null,
            flight: null,
            block: null,
            reused: null,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Telstar 19V',
            reused: false,
            customers: ['Telesat'],
            payload_type: 'Satellite',
            payload_mass_kg: null,
            payload_mass_lbs: null,
            orbit: 'GTO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: null,
    links: {
      mission_patch: null,
      mission_patch_small: null,
      reddit_campaign: null,
      reddit_launch: null,
      reddit_recovery: null,
      reddit_media: null,
      presskit: null,
      article_link: null,
      wikipedia: null,
      video_link: null
    },
    details: null
  },
  {
    flight_number: 65,
    mission_name: 'CRS-15',
    launch_year: '2018',
    launch_date_unix: 1530180180,
    launch_date_utc: '2018-06-28T10:03:00Z',
    launch_date_local: '2018-06-28T06:03:00-04:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: 'B1045',
            flight: 2,
            block: 4,
            reused: true,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'SpaceX CRS-15',
            cap_serial: null,
            reused: null,
            customers: ['NASA (CRS)'],
            payload_type: 'Dragon 1.1',
            payload_mass_kg: 2410,
            payload_mass_lbs: null,
            orbit: 'ISS',
            mass_returned_kg: null,
            mass_returned_lbs: null,
            flight_time_sec: null,
            cargo_manifest: null
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'ccafs_slc_40',
      site_name: 'CCAFS SLC 40',
      site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
    },
    launch_success: null,
    links: {
      mission_patch: null,
      mission_patch_small: null,
      reddit_campaign: null,
      reddit_launch: null,
      reddit_recovery: null,
      reddit_media: null,
      presskit: null,
      article_link: null,
      wikipedia: null,
      video_link: null
    },
    details: null
  },
  {
    flight_number: 66,
    mission_name: 'Iridium NEXT Mission 7',
    launch_year: '2018',
    launch_date_unix: 1531094400,
    launch_date_utc: '2018-07-09T00:00:00Z',
    launch_date_local: '2018-07-09T00:00:00-07:00',
    rocket: {
      rocket_id: 'falcon9',
      rocket_name: 'Falcon 9',
      rocket_type: 'FT',
      first_stage: {
        cores: [
          {
            core_serial: null,
            flight: null,
            block: null,
            reused: null,
            land_success: null,
            landing_type: null,
            landing_vehicle: null
          }
        ]
      },
      second_stage: {
        payloads: [
          {
            payload_id: 'Iridium NEXT 7',
            reused: false,
            customers: ['Iridium Communications'],
            payload_type: 'Satellite',
            payload_mass_kg: 9600,
            payload_mass_lbs: 21164.38,
            orbit: 'PO'
          }
        ]
      }
    },
    telemetry: { flight_club: null },
    reuse: {
      core: false,
      side_core1: false,
      side_core2: false,
      fairings: false,
      capsule: false
    },
    launch_site: {
      site_id: 'vafb_slc_4e',
      site_name: 'VAFB SLC 4E',
      site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
    },
    launch_success: null,
    links: {
      mission_patch: null,
      mission_patch_small: null,
      reddit_campaign: null,
      reddit_launch: null,
      reddit_recovery: null,
      reddit_media: null,
      presskit: null,
      article_link: null,
      wikipedia: null,
      video_link: null
    },
    details: null
  }
]
