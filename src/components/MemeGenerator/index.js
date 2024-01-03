import {Component} from 'react'

import {
  MainContainer,
  SubContainer,
  Heading,
  Label,
  Input,
  Button,
  Select,
  SubContainer2,
  SubHeading,
} from './styledComponents'

class MemeGenerator extends Component {
  state = {
    imgUrl: '',
    topText: '',
    bottomText: '',
    fontSize: 8,
    show: false,
  }

  img = event => {
    this.setState({imgUrl: event.target.value})
  }

  top = event => {
    this.setState({topText: event.target.value})
  }

  bottom = event => {
    this.setState({bottomText: event.target.value})
  }

  select = event => {
    this.setState({fontSize: event.target.value})
  }

  onTap = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    const {imgUrl, topText, bottomText, fontSize, show} = this.state
    return (
      <MainContainer>
        <SubContainer>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="img">Image URL</Label>
          <Input
            type="text"
            id="img"
            placeholder="Enter the Image URL"
            value={imgUrl}
            onChange={this.img}
          />
          <Label htmlFor="top">Top Text</Label>
          <Input
            type="text"
            id="top"
            placeholder="Enter the Top Text"
            value={topText}
            onChange={this.top}
          />
          <Label htmlFor="bottom">Bottom Text</Label>
          <Input
            type="text"
            id="bottom"
            placeholder="Enter the Bottom Text"
            value={bottomText}
            onChange={this.bottom}
          />
          <Label htmlFor="size">Font Size</Label>
          <Select
            type="select"
            id="size"
            onChange={this.select}
            value={fontSize}
          >
            <option defaultValue value="8">
              8
            </option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={20}>20</option>
            <option value={24}>24</option>
            <option value={28}>28</option>
            <option value={32}>32</option>
          </Select>
          <Button type="button" onClick={this.onTap}>
            Generate
          </Button>
        </SubContainer>

        <SubContainer2 show={show} imgUrl={imgUrl} data-testid="meme">
          <SubHeading fontSize={fontSize}>{topText}</SubHeading>
          <SubHeading fontSize={fontSize}>{bottomText}</SubHeading>
        </SubContainer2>
      </MainContainer>
    )
  }
}

export default MemeGenerator
