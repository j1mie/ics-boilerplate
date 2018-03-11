import React, { Component } from 'react';
import { Cardv2, TextInput, TextArea, Module, ModuleHeader, ModuleBody, ModalWrapper } from 'carbon-addons-ics';
import './App.scss';

const {
  CardMeta,
  CardMedia,
} = Cardv2;

class App extends Component {
  render() {
    return (
      <div>
        <div className="mycustomheader">
            <h1>My first ICS app</h1>
        </div>

        <div className="bx--grid">
          <div className="bx--row">
            <div className="bx--col-xs-12 ">
              <Module>
                <ModuleHeader>
                  Module Example
                </ModuleHeader>
                <ModuleBody>
                  <p>
                    Lorem Ipsum is dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                  <p>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  </p>

                  <ModalWrapper
                    buttonTriggerText="Show me more"
                    modalHeading="Here's my modal"
                  >
                    <TextArea
                      labelText="Address"
                    />
                  </ModalWrapper>

                </ModuleBody>
              </Module>
            </div>

            <div className="bx--col-xs-12 bx--col-sm-6 bx--col-md-4">
              <Cardv2>
                <CardMedia className="some-class" src="https://www.ibm.com/images/portal/U348822E90543V80/cognitive-bg-1600x900-1.jpg" altText="example image" />
                <CardMeta
                  metaPrimary="Card Title"
                  metaSecondary="20:22:18"
                  metaPadding
                />
              </Cardv2>
            </div>
            <div className="bx--col-xs-12 bx--col-sm-6 bx--col-md-4">
              <Cardv2>
                <CardMedia className="some-class" src="https://www.ibm.com/images/portal/U348822E90543V80/cognitive-bg-1600x900-1.jpg" altText="example image" />
                <CardMeta
                  metaPrimary="Card Title"
                  metaSecondary="20:22:18"
                  metaPadding
                />
              </Cardv2>
            </div>
            <div className="bx--col-xs-12 bx--col-sm-6 bx--col-md-4">
              <Cardv2>
                <CardMedia className="some-class" src="https://www.ibm.com/images/portal/U348822E90543V80/cognitive-bg-1600x900-1.jpg" altText="example image" />
                <CardMeta
                  metaPrimary="Card Title"
                  metaSecondary="20:22:18"
                  metaPadding
                />
              </Cardv2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
