// global emitter
import mitt from 'mitt';
// import mitt, { Emitter } from 'mitt';

interface Events {
  foo: string;
  bar?: any;
}

const EMITTER = mitt();
// const EMITTER: Emitter<Events> = mitt<Events>()

export default EMITTER;
