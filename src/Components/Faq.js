import React, { Fragment } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function Faq() {
  return (
    <Fragment>
      <div className="back">
        <center>
          <h1 className="covid-text">Frequently Asked Questions</h1>

          <div className="prep">
            <div className="faq-cover">
              <h1>Coronavirus Disease 2019 Basics</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is a novel coronavirus?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      A novel coronavirus is a new coronavirus that has not been
                      previously identified. The virus causing coronavirus
                      disease 2019 (COVID-19), is not the same as the
                      coronaviruses that commonly circulate among
                      humans&nbsp;and cause mild illness, like the common cold.
                    </p>
                    <p>
                      A diagnosis with coronavirus 229E, NL63, OC43, or HKU1 is
                      not the same as a COVID-19 diagnosis. Patients with
                      COVID-19 will be evaluated and cared for differently than
                      patients with common coronavirus diagnosis.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Why is the disease being called coronavirus disease 2019,
                      COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      On February 11, 2020 the World Health Organization
                      announced an official name for the disease that is causing
                      the 2019 novel coronavirus outbreak, first identified in
                      Wuhan China. The new name of this disease is coronavirus
                      disease 2019, abbreviated as COVID-19. In COVID-19, ‘CO’
                      stands for ‘corona,’ ‘VI’ for ‘virus,’ and ‘D’ for
                      disease. Formerly, this disease was referred to as “2019
                      novel coronavirus” or “2019-nCoV”.
                      <br />
                      There are many types of human coronaviruses including some
                      that commonly cause mild upper-respiratory tract
                      illnesses. COVID-19 is a new disease, caused be a novel
                      (or new) coronavirus that has not previously been seen in
                      humans. The name of this disease was selected following
                      the World Health Organization (WHO) best practiceexternal
                      icon for naming of new human infectious diseases.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How can people help stop stigma related to COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      People can fight stigma and help, not hurt, others by
                      providing social support. Counter stigma by learning and
                      sharing facts. Communicating the facts that viruses do not
                      target specific racial or ethnic groups and how COVID-19
                      actually spreads can help stop stigma.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="faq-cover">
              <h1>How It Spreads</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is the source of the virus?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Coronaviruses are a large family of viruses. Some cause
                      illness in people, and others, such as canine and feline
                      coronaviruses, only infect animals. Rarely, animal
                      coronaviruses that infect animals have emerged to infect
                      people and can spread between people. This is suspected to
                      have occurred for the virus that causes COVID-19. Middle
                      East Respiratory Syndrome (MERS) and Severe Acute
                      Respiratory Syndrome (SARS) are two other examples of
                      coronaviruses that originated from animals and then spread
                      to people.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How does the virus spread?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      This virus was first detected in Wuhan City, Hubei
                      Province, China. The first infections were linked to a
                      live animal market, but the virus is now spreading from
                      person-to-person. It&rsquo;s important to note that
                      person-to-person spread can happen on a continuum. Some
                      viruses are highly contagious (like measles), while other
                      viruses are less so.
                    </p>
                    <p>
                      The virus that causes COVID-19 seems to be spreading
                      easily and sustainably in the community (&ldquo;community
                      spread&rdquo;) in some affected geographic areas.
                      Community spread means people have been infected with the
                      virus in an area, including some who are not sure how or
                      where they became infected.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can someone who has had COVID-19 spread the illness to
                      others?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      The virus that causes COVID-19 is spreading from
                      person-to-person. Someone who is actively sick with
                      COVID-19 can spread the illness to others. That is why CDC
                      recommends that these patients be isolated either in the
                      hospital or at home (depending on how sick they are) until
                      they are better and no longer pose a risk of infecting
                      others.
                    </p>
                    <p>
                      How long someone is actively sick can vary so the decision
                      on when to release someone from isolation is made on a
                      case-by-case basis in consultation with doctors, infection
                      prevention and control experts, and public health
                      officials and involves considering specifics of each
                      situation including disease severity, illness signs and
                      symptoms, and results of laboratory testing for that
                      patient.
                    </p>
                    <ul>
                      <li>
                        The patient is free from fever without the use of
                        fever-reducing medications.
                      </li>
                      <li>
                        The patient is no longer showing symptoms, including
                        cough.
                      </li>
                      <li>
                        The patient has tested negative on at least two
                        consecutive respiratory specimens collected at least 24
                        hours apart.
                      </li>
                    </ul>
                    <p>
                      Someone who has been released from isolation is not
                      considered to pose a risk of infection to others.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can someone who has been quarantined for COVID-19 spread
                      the illness to others?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Quarantine means separating a person or group of people
                      who have been exposed to a contagious disease but have not
                      developed illness (symptoms) from others who have not been
                      exposed, in order to prevent the possible spread of that
                      disease. Quarantine is usually established for the
                      incubation period of the communicable disease, which is
                      the span of time during which people have developed
                      illness after exposure. For COVID-19, the period of
                      quarantine is 14 days from the last date of exposure,
                      because 14 days is the longest incubation period seen for
                      similar coronaviruses. Someone who has been released from
                      COVID-19 quarantine is not considered a risk for spreading
                      the virus to others because they have not developed
                      illness during the incubation period.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can the virus that causes COVID-19 be spread through food,
                      including refrigerated or frozen food?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Coronaviruses are generally thought to be spread from
                      person-to-person through respiratory droplets. Currently
                      there is no evidence to support transmission of COVID-19
                      associated with food. Before preparing or eating food it
                      is important to always wash your hands with soap and water
                      for 20 seconds for general food safety. Throughout the day
                      wash your hands after blowing your nose, coughing or
                      sneezing, or going to the bathroom.
                    </p>
                    <p>
                      It may be possible that a person can get COVID-19 by
                      touching a surface or object that has the virus on it and
                      then touching their own mouth, nose, or possibly their
                      eyes, but this is not thought to be the main way the virus
                      spreads.
                    </p>
                    <p>
                      In general, because of poor survivability of these
                      coronaviruses on surfaces, there is likely very low risk
                      of spread from food products or packaging that are shipped
                      over a period of days or weeks at ambient, refrigerated,
                      or frozen temperatures.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Will warm weather stop the outbreak of COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      It is not yet known whether weather and temperature impact
                      the spread of COVID-19. Some other viruses, like the
                      common cold and flu, spread more during cold weather
                      months but that does not mean it is impossible to become
                      sick with these viruses during other months.&nbsp; At this
                      time, it is not known whether the spread of COVID-19 will
                      decrease when weather becomes warmer. &nbsp;There is much
                      more to learn about the transmissibility, severity, and
                      other features associated with COVID-19 and investigations
                      are ongoing.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is community spread?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Community spread means people have been infected with the
                      virus in an area, including some who are not sure how or
                      where they became infected.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="faq-cover">
              <h1>How to Protect Yourself</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is the source of the virus?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Older adults and people of any age who have serious
                      underlying medical conditions >&nbsp;may be at higher risk
                      for more serious complications from COVID-19.&nbsp; Based
                      upon available information to date, those most at risk
                      include
                    </p>
                    <ul>
                      <li>People 65 years and older</li>
                      <li>
                        People who live in a nursing home or long-term care
                        facility
                      </li>
                      <li>
                        People of any age with the following underlying medical
                        conditions, particularly those that are not well
                        controlled
                        <ul>
                          <li>Chronic lung disease or asthma</li>
                          <li>
                            Congestive heart failure or coronary artery disease
                          </li>
                          <li>Diabetes</li>
                          <li>
                            Neurologic conditions that weaken ability to cough
                          </li>
                          <li>Weakened immune system</li>
                          <li>
                            Chemotherapy or radiation for cancer (currently or
                            in recent past)
                          </li>
                          <li>Sickle cell anemia</li>
                          <li>Chronic kidney disease requiring dialysis</li>
                          <li>Cirrhosis of the liver</li>
                          <li>
                            Lack of spleen or a spleen that doesn&rsquo;t
                            function correctly
                          </li>
                          <li>
                            Extreme obesity (body mass index [BMI] <u>&gt;</u>
                            40)
                          </li>
                        </ul>
                      </li>
                      <li>People who are pregnant</li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What should people at higher risk of serious illness with
                      COVID-19 do?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      If you are at higher risk of getting very sick from
                      COVID-19, you should: stock up on supplies; take everyday
                      precautions to keep space between yourself and others;
                      when you go out in public, keep away from others who are
                      sick; limit close contact and wash your hands often; and
                      avoid crowds, cruise travel, and non-essential
                      travel.&nbsp;If there is an outbreak in your community,
                      stay home as much as possible. Watch for symptoms and
                      emergency signs. If you get sick, stay home and call your
                      doctor. People at Risk for Serious Illness from COVID-19.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Is it recommended the use of facemask to prevent COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      It is not recommended that people who are well wear a
                      facemask to protect themselves from respiratory illnesses,
                      including COVID-19. You should only wear a mask if a
                      healthcare professional recommends it. A facemask should
                      be used by people who have COVID-19 and are showing
                      symptoms. This is to protect others from the risk of
                      getting infected. The use of facemasks also is crucial for
                      health workers&nbsp;and other people who are taking care
                      of someone infected with COVID-19 in close
                      settings&nbsp;(at home or in a health care facility).
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Am I at risk for COVID-19 from a package or products
                      shipping from China?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      There is still a lot that is unknown about the newly
                      emerged COVID-19 and how it spreads. Two other
                      coronaviruses have emerged previously to cause severe
                      illness in people (MERS-CoV and SARS-CoV). The virus that
                      causes COVID-19 is more genetically related to SARS-CoV
                      than MERS-CoV, but both are betacoronaviruses with their
                      origins in bats. While we don’t know for sure that this
                      virus will behave the same way as SARS-CoV and MERS-CoV,
                      we can use the information gained from both of these
                      earlier coronaviruses to guide us. In general, because of
                      poor survivability of these coronaviruses on surfaces,
                      there is likely very low risk of spread from products or
                      packaging that are shipped over a period of days or weeks
                      at ambient temperatures. Coronaviruses are generally
                      thought to be spread most often by respiratory droplets.
                      Currently there is no evidence to support transmission of
                      COVID-19 associated with imported goods and there have not
                      been any cases of COVID-19 in the United States associated
                      with imported goods.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Is it okay for me to donate blood?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      In healthcare settings all across the United States,
                      donated blood is a lifesaving, essential part of caring
                      for patients. The need for donated blood is constant, and
                      blood centers are open and in urgent need of donations. It
                      is encouraged for people who are well to continue to
                      donate blood if they are able, even if they are practicing
                      social distancing because of COVID-19.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="faq-cover">
              <h1>COVID-19 and Children</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What is the risk of my child becoming sick with COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Based on available evidence, children do not appear to be
                      at higher risk for COVID-19 than adults. While some
                      children and infants have been sick with COVID-19, adults
                      make up most of the known cases to date.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How can I protect my child from COVID-19 infection?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      You can encourage your child to help stop the spread of
                      COVID-19 by teaching them to do the same things everyone
                      should do to stay healthy.
                    </p>
                    <ul>
                      <li>
                        Clean hands often using soap and water or alcohol-based
                        hand sanitizer
                      </li>
                      <li>Avoid people who are sick (coughing and sneezing)</li>
                      <li>
                        Clean and disinfect high-touch surfaces daily in
                        household common areas (e.g. tables, hard-backed chairs,
                        doorknobs, light switches, remotes, handles, desks,
                        toilets, sinks)
                      </li>
                      <li>
                        Launder items including washable plush toys as
                        appropriate in accordance with the manufacturer&rsquo;s
                        instructions. If possible, launder items using the
                        warmest appropriate water setting for the items and dry
                        items completely. Dirty laundry from an ill person can
                        be washed with other people&rsquo;s items.
                      </li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Are the symptoms of COVID-19 different in children than in
                      adults?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      No. The symptoms of COVID-19 are similar in children and
                      adults. However, children with confirmed COVID-19 have
                      generally presented with mild symptoms. Reported symptoms
                      in children include cold-like symptoms, such as fever,
                      runny nose, and cough. Vomiting and diarrhea have also
                      been reported. It’s not known yet whether some children
                      may be at higher risk for severe illness, for example,
                      children with underlying medical conditions and special
                      healthcare needs. There is much more to be learned about
                      how the disease impacts children.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Should children wear masks?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      No. If your child is healthy, there is no need for them to
                      wear a facemask. Only people who have symptoms of illness
                      or who are providing care to those who are ill should wear
                      masks.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="faq-cover">
              <h1>Preparing Your Home for COVID-19</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How can my family and I prepare for COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Create a household plan of action to help protect your
                      health and the health of those you care about in the event
                      of an outbreak of COVID-19 in your community:
                    </p>
                    <ul>
                      <li>
                        Talk with the people who need to be included in your
                        plan, and discuss what to do if a COVID-19 outbreak
                        occurs in your community.
                      </li>
                      <li>
                        Plan ways to care for those who might be at greater risk
                        for serious complications, particularly older adults and
                        those with severe chronic medical &nbsp;conditions like
                        heart, lung or kidney disease.
                        <ul>
                          <li>
                            Make sure they have access to several weeks of
                            medications and supplies in case you need to stay
                            home for prolonged periods of time.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Get to know your neighbors and find out if your
                        neighborhood has a website or social media page to stay
                        connected.
                      </li>
                      <li>
                        Create a list of local organizations that you and your
                        household can contact in the event you need access to
                        information, healthcare services, support, and
                        resources.
                      </li>
                      <li>
                        Create an emergency contact list of family, friends,
                        neighbors, carpool drivers, health care providers,
                        teachers, employers, the local public health department,
                        and other community resources.
                      </li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What steps can my family take to reduce our risk of
                      getting COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Practice everyday preventive actions to help reduce your
                      risk of getting sick and remind everyone in your home to
                      do the same. These actions are especially important for
                      older adults and people who have severe chronic medical
                      conditions:
                    </p>
                    <ul>
                      <li>Avoid close contact with people who are sick.</li>
                      <li>
                        Stay home when you are sick, except to get medical care.
                      </li>
                      <li>
                        Cover your coughs and sneezes with a tissue and throw
                        the tissue in the trash.
                      </li>
                      <li>
                        Wash your hands often with soap and water for at least
                        20 seconds, especially after blowing your nose,
                        coughing, or sneezing; going to the bathroom; and before
                        eating or preparing food.
                      </li>
                      <li>
                        If soap and water are not readily available, use an
                        alcohol-based hand sanitizer with at least 60% alcohol.
                        Always wash hands with soap and water if hands are
                        visibly dirty.
                      </li>
                      <li>
                        Clean and disinfect frequently touched surfaces and
                        objects <br />
                        (e.g., tables, countertops, light switches, doorknobs,
                        and cabinet handles).
                      </li>
                    </ul>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What should I do if someone in my house gets sick with
                      COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Most people who get COVID-19 will be able to recover at
                      home. Directions have been given for people who are
                      recovering at home and their caregivers, including:
                      <ul>
                        <li>
                          Stay home when you are sick, except to get medical
                          care.
                        </li>
                      </ul>
                      <p>
                        If you develop <strong>emergency warning signs</strong>{" "}
                        for COVID-19 get{" "}
                        <strong>medical attention immediately</strong>.
                        Emergency warning signs include*:
                      </p>
                      <ul>
                        <li>Trouble breathing</li>
                        <li>Persistent pain or pressure in the chest</li>
                        <li>New confusion or inability to arouse</li>
                        <li>Bluish lips or face</li>
                      </ul>
                      <p>
                        *This list is not all inclusive. Please consult your
                        medical provider for any other symptoms that are severe
                        or concerning.
                      </p>
                      <ul>
                        <li>
                          Use a separate room and bathroom for sick household
                          members (if possible).
                        </li>
                        <li>
                          Clean hands regularly by handwashing with soap and
                          water or using an alcohol-based hand sanitizer with at
                          least 60% alcohol.
                        </li>
                        <li>
                          Provide your sick household member with clean
                          disposable facemasks to wear at home, if available, to
                          help prevent spreading COVID-19 to others.
                        </li>
                        <li>
                          Clean, as needed, to avoid unnecessary contact with
                          the sick person.
                        </li>
                        <li>
                          Avoid sharing personal items like utensils, food, and
                          drinks.
                        </li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How can I prepare in case my child&rsquo;s school,
                      childcare facility, or university is dismissed?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Talk to the school or facility about their emergency
                      operations plan. Understand the plan for continuing
                      education and social services (such as student meal
                      programs) during school dismissals. If your child attends
                      a college or university, encourage them to learn about the
                      schools plan for a COVID-19 outbreak.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How can I prepare for COVID-19 at work?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Plan for potential changes at your workplace. Talk to your
                      employer about their emergency operations plan, including
                      sick-leave policies and telework options.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Should I use soap and water or a hand sanitizer to protect
                      against COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Handwashing is one of the best ways to protect yourself
                      and your family from getting sick. Wash your hands often
                      with soap and water for at least 20 seconds, especially
                      after blowing your nose, coughing, or sneezing; going to
                      the bathroom; and before eating or preparing food. If soap
                      and water are not readily available, use an alcohol-based
                      hand sanitizer with at least 60% alcohol.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What cleaning products should I use to protect against
                      COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Clean and disinfect frequently touched surfaces such as
                      tables, doorknobs, light switches, countertops, handles,
                      desks, phones, keyboards, toilets, faucets, and sinks. If
                      surfaces are dirty, clean them using detergent or soap and
                      water prior to disinfection. To disinfect, most common
                      EPA-registered household disinfectants will work.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="faq-cover">
              <h1>In Case of an Outbreak in Your Community</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What should I do if there is an outbreak in my community?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      <p>
                        During an outbreak, stay calm and put your preparedness
                        plan to work. Follow the steps below:
                      </p>
                      <p>Protect yourselfs and others</p>
                      <ul>
                        <li>
                          Stay home if you are sick. Keep away from people who
                          are sick. Limit close contact with others as much as
                          possible (about 6 feet).
                        </li>
                      </ul>
                      <p>
                        <strong>Put your household plan into action. </strong>
                      </p>
                      <ul>
                        <li>
                          <strong>
                            Stay informed about the local COVID-19 situation
                          </strong>
                          <br />
                          Be aware of temporary school dismissals in your area,
                          as this may affect your households daily routine.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>
                            Continue practicing everyday preventive actions.{" "}
                          </strong>
                          <br />
                          Cover coughs and sneezes with a tissue and wash your
                          hands often with soap and water for at least 20
                          seconds. If soap and water are not available, use a
                          hand sanitizer that contains 60% alcohol. Clean
                          frequently touched surfaces and objects daily using a
                          regular household detergent and water.
                        </li>
                        <li>
                          <strong>
                            Notify your workplace as soon as possible if your
                            regular work schedule changes
                          </strong>
                          <br />
                          Ask to work from home or take leave if you or someone
                          in your household gets sick with COVID-19 symptoms, or
                          if your child school is dismissed temporarily. Learn
                          how businesses and employers can plan for and respond
                          to COVID-19.
                        </li>
                        <li>
                          <strong>
                            Stay in touch with others by phone or email.{" "}
                          </strong>
                          <br />
                          If you have a chronic medical condition and live
                          alone, ask family, friends, and health care providers
                          to check on you during an outbreak. Stay in touch with
                          family and friends, especially those at increased risk
                          of developing severe illness, such as older adults and
                          people with severe chronic medical conditions.
                        </li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How do I prepare my children in case of COVID-19 outbreak
                      in our community?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Outbreaks can be stressful for adults and children. Talk
                      with your children about the outbreak, try to stay calm,
                      and reassure them that they are safe. If appropriate,
                      explain to them that most illness from COVID-19 seems to
                      be mild.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What steps should parents take to protect children during
                      a community outbreak?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      This is a new virus and we are still learning about it,
                      but so far, there does not seem to be a lot of illness in
                      children. Most illness, including serious illness, is
                      happening in adults of working age and older adults. If
                      there cases of COVID-19 that impact your childs school,
                      the school may dismiss students. Keep track of school
                      dismissals in your community. Read or watch local media
                      sources that report school dismissals. If schools are
                      dismissed temporarily, use alternative childcare
                      arrangements, if needed.
                    </p>
                    <p>
                      If your child/children become sick with COVID-19, notify
                      their childcare facility or school. Talk with teachers
                      about classroom assignments and activities they can do
                      from home to keep up with their schoolwork.
                    </p>
                    <p>
                      Discourage children and teens from gathering in other
                      public places while school is dismissed to help slow the
                      spread of COVID-19 in the community.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Will schools be dismissed if there is an outbreak in my
                      community?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Depending on the situation, public health officials may
                      recommend community actions to reduce exposures to
                      COVID-19, such as school dismissals. Read or watch local
                      media sources that report school dismissals or and watch
                      for communication from your childs school. If schools are
                      dismissed temporarily, discourage students and staff from
                      gathering or socializing anywhere, like at a friends
                      house, a favorite restaurant, or the local shopping mall.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Should I go to work if there is an outbreak in my
                      community?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Follow the advice of your local health officials. Stay
                      home if you can. Talk to your employer to discuss working
                      from home, taking leave if you or someone in your
                      household gets sick with COVID-19 symptoms, or if your
                      childs school is dismissed temporarily. Employers should
                      be aware that more employees may need to stay at home to
                      care for sick children or other sick family members than
                      is usual in case of a community outbreak.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="faq-cover">
              <h1>Symptoms & Testing</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      What are the symptoms and complications that COVID-19 can
                      cause?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Current symptoms reported for patients with COVID-19 have
                      included mild to severe respiratory illness with fever,
                      cough, and difficulty breathing.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Should I be tested for COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Outbreaks can be stressful for adults and children. Talk
                      with your children about the outbreak, try to stay calm,
                      and reassure them that they are safe. If appropriate,
                      explain to them that most illness from COVID-19 seems to
                      be mild.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Can a person test negative and later test positive for
                      COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      Using the CDC-developed diagnostic test, a negative result
                      means that the virus that causes COVID-19 was not found in
                      the persons sample. In the early stages of infection, it
                      is possible the virus will not be detected.
                    </p>
                    <p>
                      For COVID-19, a negative test result for a sample
                      collected while a person has symptoms likely means that
                      the COVID-19 virus is not causing their current illness.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Why might someone blame or avoid individuals and groups
                      (create stigma) because of COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      People in the U.S. may be worried or anxious about friends
                      and relatives who are living in or visiting areas where
                      COVID-19 is spreading. Some people are worried about the
                      disease. Fear and anxiety can lead to social stigma, for
                      example, towards Chinese or other Asian Americans or
                      people who were in quarantine.
                    </p>
                    <p>
                      Stigma is discrimination against an identifiable group of
                      people, a place, or a nation. Stigma is associated with a
                      lack of knowledge about how COVID-19 spreads, a need to
                      blame someone, fears about disease and death, and gossip
                      that spreads rumors and myths.
                    </p>
                    <p>
                      Stigma hurts everyone by creating more fear or anger
                      towards ordinary people instead of the disease that is
                      causing the problem.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How can people help stop stigma related to COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      People can fight stigma and help, not hurt, others by
                      providing social support. Counter stigma by learning and
                      sharing facts. Communicating the facts that viruses do not
                      target specific racial or ethnic groups and how COVID-19
                      actually spreads can help stop stigma.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="faq-cover">
              <h1>COVID-19 and Funerals</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Am I at risk if I go to a funeral or visitation service
                      for someone who died of COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      There is currently no known risk associated with being in
                      the same room at a funeral or visitation service with the
                      body of someone who died of COVID-19.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Am I at risk if I touch someone who died of COVID-19 after
                      they have passed away?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      COVID-19 is a new disease and
                      <strong>we are still learning how it spreads.</strong> The
                      virus that causes COVID-19 is thought to mainly spread
                      from close contact (i.e., within about 6 feet) with a
                      person who is currently sick with COVID-19. The virus
                      likely spreads primarily through respiratory droplets
                      produced when an infected person coughs or sneezes,
                      similar to how influenza and other respiratory infections
                      spread. These droplets can land in the mouths or noses of
                      people who are nearby or possibly be inhaled into the
                      lungs.This type of spread is not a concern after death.
                    </p>
                    <p>
                      It may be possible that a person can get COVID-19 by
                      touching a surface or object that has the virus on it and
                      then touching their own mouth, nose, or possibly their
                      eyes, but this is not thought to be the main way the virus
                      spreads.
                    </p>
                    <p>
                      People should consider not touching the body of someone
                      who has died of COVID-19. Older people and people of all
                      ages with severe underlying health conditions are at
                      higher risk of developing serious COVID-19 illness. There
                      may be less of a chance of the virus spreading from
                      certain types of touching, such as holding the hand or
                      hugging after the body has been prepared for viewing.
                      Other activities, such as kissing, washing, and shrouding
                      should be avoided before, during, and after the body has
                      been prepared, if possible. If washing the body or
                      shrouding are important religious or cultural practices,
                      families are encouraged to work with their community
                      cultural and religious leaders and funeral home staff on
                      how to reduce their exposure as much as possible. At a
                      minimum, people conducting these activities should wear
                      disposable gloves. If splashing of fluids is expected,
                      additional personal protective equipment (PPE) may be
                      required (such as disposable gown, faceshield or goggles
                      and facemask).
                    </p>
                    <p>
                      Cleaning should be conducted in accordance with
                      manufacturers instructions for all cleaning and
                      disinfection products. After removal of PPE, perform hand
                      hygiene by washing hands with soap and water for at least
                      20 seconds or using an alcohol-based hand sanitizer that
                      contains at least 60% alcohol if soap and water are not
                      available. Soap and water should be used if the hands are
                      visibly soiled.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="faq-cover">
              <h1>COVID-19 and Animals</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Should I be concerned about pets or other animals and
                      COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      While this virus seems to have emerged from an animal
                      source, it is now spreading from person-to-person in
                      China. There is no reason to think that any animals
                      including pets in the United States might be a source of
                      infection with this new coronavirus. To date, CDC has not
                      received any reports of pets or other animals becoming
                      sick with COVID-19. At this time, there is no evidence
                      that companion animals including pets can spread COVID-19.
                      However, since animals can spread other diseases to
                      people, its always a good idea to wash your hands after
                      being around animals.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      Should I avoid contact with pets or other animals if I am
                      sick with COVID-19?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      You should restrict contact with pets and other animals
                      while you are sick with COVID-19, just like you would
                      around other people. Although there have not been reports
                      of pets or other animals becoming sick with COVID-19, it
                      is still recommended that people sick with COVID-19 limit
                      contact with animals until more information is known about
                      the virus. When possible, have another member of your
                      household care for your animals while you are sick. If you
                      are sick with COVID-19, avoid contact with your pet,
                      including petting, snuggling, being kissed or licked, and
                      sharing food. If you must care for your pet or be around
                      animals while you are sick, wash your hands before and
                      after you interact with pets and wear a facemask.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="faq-cover">
              <h1>School Dismissals and Children</h1>
              <Accordion allowZeroExpanded={true}>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      While school&rsquo;s out, can my child hang out with their
                      friends?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      <ul>
                        <li>
                          The key to slowing the spread of COVID-19 is to limit
                          social interactions as much as possible. Parents
                          should minimize play dates, and if held, parents
                          should keep the groups small. Advise older children to
                          hang out in a small group and to meet up outside
                          rather than inside. It&rsquo;s easier to keep and
                          maintain space between others in outdoor settings,
                          like parks.
                        </li>
                        <li>
                          If you have small meetups, consider hanging out with
                          another family or friend who is also taking extra
                          measures to put distance between themselves and others
                          (i.e. social distancing). Make sure children practice{" "}
                          <a href="https://www.cdc.gov/coronavirus/2019-ncov/prepare/prevention.html">
                            everyday preventive behaviors
                          </a>
                          , such as cleaning and then disinfecting frequently
                          touched surfaces. Remember, if children meet outside
                          of school in bigger groups, it can put everyone at
                          risk.
                          <ul>
                            <li>
                              This includes spring break and other group travel.
                              Parents should help their older children revise
                              spring break plans that included non-essential
                              travel to crowded areas.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Information about COVID-19 in children is somewhat
                          limited, but current data suggest children with
                          COVID-19 may show only mild symptoms. However, they
                          can still pass this virus onto others who may be at
                          higher risk, including{" "}
                          <a href="https://www.cdc.gov/coronavirus/2019-ncov/specific-groups/high-risk-complications.html">
                            older adults and people who have serious chronic
                            medical conditions
                          </a>
                          .
                        </li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      While school&rsquo;s out, how can I help my child continue
                      learning?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      <ul>
                        <li>
                          Stay in touch with your child&rsquo;s school.
                          <ul>
                            <li>
                              Many schools are adapting in-person lessons to
                              online or virtual learning. Review assignments
                              from the school, and help your child establish a
                              reasonable pace for completing the work. You may
                              need to assist your child with turning on devices,
                              reading instructions, and typing answers.
                            </li>
                            <li>
                              Communicate challenges to your school. If you face
                              technology or connectivity issues, or if your
                              child is having a hard time completing
                              assignments, let the school know.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Create a schedule and routine for learning at home,
                          but remain flexible.
                          <ul>
                            <li>
                              Have consistent bedtimes and get up at the same
                              time, Monday through Friday.
                            </li>
                            <li>
                              Structure the day for learning, free time, healthy
                              meals and snacks, and physical activity.
                            </li>
                            <li>
                              Allow flexibility in the schedule&mdash;it&rsquo;s
                              okay to adapt based on your day.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Consider the needs and adjustment required for your
                          child&rsquo;s age group.
                          <ul>
                            <li>
                              The transition to being at home will be different
                              for preschoolers, K-5, middle school students, and
                              high school students. Talk to your child about
                              expectations and how they are adjusting to being
                              at home versus at school.
                            </li>
                            <li>
                              Consider ways your child can stay connected with
                              their friends without spending time in person.
                            </li>
                          </ul>
                        </li>
                        <li>
                          Look for ways to make learning fun.
                          <ul>
                            <li>
                              Have hands-on activities, like puzzles, painting,
                              drawing, and making things.
                            </li>
                            <li>
                              Independent play can also be used in place of
                              structured learning. Encourage children to build a
                              fort from sheets or practice counting by stacking
                              blocks.
                            </li>
                            <li>
                              Practice handwriting and grammar by writing
                              letters to family members. This is a great way to
                              connect and limit face-to-face contact.
                            </li>
                            <li>
                              Start a journal with your child to document this
                              time and discuss the shared experience.
                            </li>
                            <li>
                              Use audiobooks or see if your local library is
                              hosting virtual or live-streamed reading events.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      While school&rsquo;s out, will kids have access to meals?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      <ul>
                        <li>
                          Check with your school on plans to continue meal
                          services during the school dismissal. Many schools are
                          keeping school facilities open to allow families to
                          pick up meals or are providing grab-and-go meals at a
                          central location.
                        </li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      While school&rsquo;s out, how can I keep my family
                      healthy?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      <ul>
                        <li>
                          <strong>
                            Watch your child for any signs of illness.{" "}
                          </strong>
                          <ul>
                            <li>
                              If you see any sign of illness consistent with{" "}
                              <a href="https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html">
                                symptoms of COVID-19
                              </a>
                              , particularly fever, cough, or shortness of
                              breath, keep your child at home and away from
                              others as much as possible. Follow CDC&rsquo;s
                              guidance on &ldquo;
                              <a href="https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/steps-when-sick.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fabout%2Fsteps-when-sick.html">
                                What to do if you are sick
                              </a>
                              .&rdquo;
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>
                            Teach and reinforce everyday preventive actions
                          </strong>
                          <strong>.</strong>
                          <ul>
                            <li>
                              Parents and caretakers play an important role in
                              teaching children to wash their hands. Explain
                              that hand washing can keep them healthy and stop
                              the virus from spreading to others.
                            </li>
                            <li>
                              Be a good role model&mdash;if you wash your hands
                              often, they&rsquo;re more likely to do the same.
                            </li>
                            <li>
                              Make{" "}
                              <a href="https://www.cdc.gov/handwashing/handwashing-family.html">
                                handwashing a family activity
                              </a>
                              .
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Help your child stay active. </strong>
                          <ul>
                            <li>
                              Encourage your child to play
                              outdoors&mdash;it&rsquo;s great for physical and
                              mental health. Take a walk with your child or go
                              on a bike ride.
                            </li>
                            <li>
                              Use indoor activity breaks (e.g., stretch breaks,
                              dance breaks) throughout the day to help your
                              child stay healthy and focused.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>
                            Help your child stay socially connected.
                          </strong>
                          <ul>
                            <li>
                              Help your child reach out to friends and family
                              via phone or video chats.
                            </li>
                            <li>
                              Help your child write cards or letters to family
                              members they may not be able to visit.
                            </li>
                            <li>
                              Some schools and non-profits, such as the{" "}
                              <a
                                href="https://casel.org/"
                                class="tp-link-policy"
                                data-domain-ext="org"
                              >
                                Collaborative for Academic, Social, and
                                Emotional Learning
                                <span class="sr-only">external icon</span>
                                <span
                                  class="fi cdc-icon-external x16 fill-external"
                                  aria-hidden="true"
                                ></span>
                              </a>{" "}
                              and{" "}
                              <a
                                href="http://ei.yale.edu/"
                                class="tp-link-policy"
                                data-domain-ext="edu"
                              >
                                The Yale Center for Emotional Intelligence
                                <span class="sr-only">external icon</span>
                                <span
                                  class="fi cdc-icon-external x16 fill-external"
                                  aria-hidden="true"
                                ></span>
                              </a>
                              , have resources for social and emotional
                              learning. Check to see if your school has tips and
                              guidelines to help support social and emotional
                              needs of your child.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      While school&rsquo;s out, limit time with older adults,
                      including relatives, and people with chronic medical
                      conditions.
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="left">
                    <p>
                      You should restrict contact with pets and other animals
                      while you are sick with COVID-19, just like you would
                      around other people. Although there have not been reports
                      of pets or other animals becoming sick with COVID-19, it
                      is still recommended that people sick with COVID-19 limit
                      contact with animals until more information is known about
                      the virus. When possible, have another member of your
                      household care for your animals while you are sick. If you
                      are sick with COVID-19, avoid contact with your pet,
                      including petting, snuggling, being kissed or licked, and
                      sharing food. If you must care for your pet or be around
                      animals while you are sick, wash your hands before and
                      after you interact with pets and wear a facemask.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </center>
      </div>
    </Fragment>
  );
}
