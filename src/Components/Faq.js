import React, { Component, Fragment } from "react";
import DropFaq from "./DropFaq";

export default class Faq extends Component {
  render() {
    return (
      <Fragment>
        <div className="back">
          <center>
            <h1 class="covid-text marg-top">Frequently Asked Questions</h1>
            <div class="prep">
              <div class="faq-cover">
                <h1>Coronavirus Disease 2019 Basics</h1>
                <DropFaq>
                  <div label="What is a novel coronavirus?">
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
                  </div>
                  <div
                    label=" Why is the disease being called coronavirus disease 2019,
              COVID-19? <br> "
                  >
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
                  </div>
                  <div label="How can people help stop stigma related to COVID-19?">
                    <p>
                      People can fight stigma and help, not hurt, others by
                      providing social support. Counter stigma by learning and
                      sharing facts. Communicating the facts that viruses do not
                      target specific racial or ethnic groups and how COVID-19
                      actually spreads can help stop stigma.
                    </p>
                  </div>
                </DropFaq>
              </div>

              <div class="faq-cover">
                <h1>Coronavirus Disease 2019 Basics</h1>
                <DropFaq>
                  <div label="What is a novel coronavirus?">
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
                  </div>
                  <div
                    label=" Why is the disease being called coronavirus disease 2019,
              COVID-19?"
                  >
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
                  </div>
                  <div label="How can people help stop stigma related to COVID-19?">
                    <p>
                      People can fight stigma and help, not hurt, others by
                      providing social support. Counter stigma by learning and
                      sharing facts. Communicating the facts that viruses do not
                      target specific racial or ethnic groups and how COVID-19
                      actually spreads can help stop stigma.
                    </p>
                  </div>
                </DropFaq>
              </div>
            </div>
          </center>
        </div>
      </Fragment>
    );
  }
}
