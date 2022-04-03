import { SvgIcon, SvgIconProps } from "@mui/material";
import { useSlideContext } from "./Context";
import Defs from "./Defs";

type FourthLabelProps = SvgIconProps;
export default function FourthLabel(props: FourthLabelProps): JSX.Element {
  const { labelPathProps, labelProps } = useSlideContext("fourth");

  return (
    <SvgIcon width="651.813" height="71" viewBox="0 0 651.813 71" {...props}>
      <Defs />
      <a href="/mat-bang-chi-tiet/#mat-bang-chi-tiet">
        <g
          id="Group_553"
          data-name="Group 553"
          transform="translate(-179 -507)"
          {...labelProps}
        >
          <path
            id="Path_1681"
            data-name="Path 1681"
            d="M0,0,610.191.412l41.621,34.76L612.27,70.783,0,71Z"
            transform="translate(179 507)"
            {...labelPathProps}
          />
          <path
            id="Path_1718"
            data-name="Path 1718"
            d="M5.168-12.921H.088V-15.33H13.1v2.409H8.015V0H5.168Zm9.526,1.226h2.738V0H14.695Zm1.38-1.927a1.758,1.758,0,0,1-1.248-.471,1.538,1.538,0,0,1-.5-1.172,1.538,1.538,0,0,1,.5-1.172,1.758,1.758,0,0,1,1.248-.471,1.808,1.808,0,0,1,1.248.449,1.447,1.447,0,0,1,.5,1.128,1.651,1.651,0,0,1-.493,1.215A1.705,1.705,0,0,1,16.075-13.622Zm15.943,7.84q0,.285-.044.81H22.8a3.181,3.181,0,0,0,1.259,2.048,4.128,4.128,0,0,0,2.529.756,4.263,4.263,0,0,0,3.176-1.27l1.467,1.686A4.944,4.944,0,0,1,29.236-.328a7.259,7.259,0,0,1-2.716.482,7.227,7.227,0,0,1-3.394-.767A5.52,5.52,0,0,1,20.86-2.748a6.03,6.03,0,0,1-.8-3.1,6.119,6.119,0,0,1,.777-3.077,5.515,5.515,0,0,1,2.157-2.135,6.294,6.294,0,0,1,3.11-.767,6.136,6.136,0,0,1,3.055.756,5.351,5.351,0,0,1,2.1,2.124A6.441,6.441,0,0,1,32.018-5.782ZM26.1-9.636a3.3,3.3,0,0,0-2.223.777,3.27,3.27,0,0,0-1.106,2.07h6.636a3.227,3.227,0,0,0-1.073-2.059A3.263,3.263,0,0,0,26.1-9.636ZM26.039,4.446A1.32,1.32,0,0,1,25.1,4.1a1.232,1.232,0,0,1-.372-.942A1.313,1.313,0,0,1,25.1,2.2a1.349,1.349,0,0,1,1.883,0,1.313,1.313,0,0,1,.372.953,1.232,1.232,0,0,1-.372.942A1.32,1.32,0,0,1,26.039,4.446Zm1.927-17.739-1.927-1.621-1.927,1.621H21.856l2.935-3h2.5l2.935,3Zm13.315,1.467a4.887,4.887,0,0,1,3.548,1.292A5.1,5.1,0,0,1,46.165-6.7V0H43.428V-6.351a3.283,3.283,0,0,0-.723-2.31,2.672,2.672,0,0,0-2.059-.777,3.16,3.16,0,0,0-2.387.909,3.623,3.623,0,0,0-.876,2.617V0H34.646V-11.695h2.606v1.511A4.28,4.28,0,0,1,38.96-11.41,6.147,6.147,0,0,1,41.281-11.826Zm14.673-3.5H58.8V0H55.955Zm2.54-4.249h3.219l-3.811,3H55.538ZM68.043.153A6.856,6.856,0,0,1,64.78-.613a5.628,5.628,0,0,1-2.256-2.135,5.967,5.967,0,0,1-.81-3.1,5.909,5.909,0,0,1,.81-3.088,5.67,5.67,0,0,1,2.245-2.124,6.839,6.839,0,0,1,3.274-.767,6.308,6.308,0,0,1,3.033.7,4.547,4.547,0,0,1,1.96,2.015l-2.1,1.226A3.339,3.339,0,0,0,69.675-9.1,3.443,3.443,0,0,0,68.021-9.5a3.464,3.464,0,0,0-2.54,1,3.574,3.574,0,0,0-1.007,2.661,3.6,3.6,0,0,0,1,2.661,3.455,3.455,0,0,0,2.551,1A3.443,3.443,0,0,0,69.675-2.6a3.339,3.339,0,0,0,1.259-1.215l2.1,1.226A4.739,4.739,0,0,1,71.055-.558,6.182,6.182,0,0,1,68.043.153ZM81.928-11.826a4.887,4.887,0,0,1,3.548,1.292A5.1,5.1,0,0,1,86.812-6.7V0H84.074V-6.351a3.283,3.283,0,0,0-.723-2.31,2.672,2.672,0,0,0-2.059-.777,3.16,3.16,0,0,0-2.387.909,3.623,3.623,0,0,0-.876,2.617V0H75.292V-16.25H78.03v5.913a4.453,4.453,0,0,1,1.675-1.106A6.149,6.149,0,0,1,81.928-11.826Zm28.295-3.5V0h-2.847V-6.57H99.448V0H96.6V-15.33h2.847V-9h7.928V-15.33ZM119.333.153a6.635,6.635,0,0,1-3.2-.767,5.589,5.589,0,0,1-2.223-2.135,6.03,6.03,0,0,1-.8-3.1,5.971,5.971,0,0,1,.8-3.088,5.612,5.612,0,0,1,2.223-2.124,6.635,6.635,0,0,1,3.2-.767,6.681,6.681,0,0,1,3.219.767,5.612,5.612,0,0,1,2.223,2.124,5.971,5.971,0,0,1,.8,3.088,6.03,6.03,0,0,1-.8,3.1,5.589,5.589,0,0,1-2.223,2.135A6.681,6.681,0,0,1,119.333.153Zm0-2.343a3.345,3.345,0,0,0,2.5-1.007,3.627,3.627,0,0,0,.985-2.65,3.627,3.627,0,0,0-.985-2.65,3.345,3.345,0,0,0-2.5-1.007A3.309,3.309,0,0,0,116.847-8.5a3.65,3.65,0,0,0-.975,2.65,3.65,3.65,0,0,0,.975,2.65A3.309,3.309,0,0,0,119.333-2.19Zm13.184-9.636a5.7,5.7,0,0,1,3.953,1.237,4.783,4.783,0,0,1,1.369,3.734V0h-2.584V-1.423A3.185,3.185,0,0,1,133.82-.252a5.607,5.607,0,0,1-2.245.405,5.5,5.5,0,0,1-2.3-.449,3.553,3.553,0,0,1-1.522-1.248,3.168,3.168,0,0,1-.537-1.807,3.1,3.1,0,0,1,1.172-2.529,5.819,5.819,0,0,1,3.69-.953H135.1v-.175a2.4,2.4,0,0,0-.734-1.883,3.174,3.174,0,0,0-2.179-.657,6.29,6.29,0,0,0-1.938.307,4.761,4.761,0,0,0-1.61.854l-1.073-1.993a6.645,6.645,0,0,1,2.212-1.073A9.842,9.842,0,0,1,132.517-11.826Zm-.372,9.986a3.535,3.535,0,0,0,1.829-.471A2.562,2.562,0,0,0,135.1-3.657V-5.015h-2.825q-2.365,0-2.365,1.555a1.4,1.4,0,0,0,.591,1.183A2.711,2.711,0,0,0,132.145-1.84Zm-3.723-14.454h3.219l2.956,3h-2.365Zm19.557,4.468a4.887,4.887,0,0,1,3.548,1.292A5.1,5.1,0,0,1,152.862-6.7V0h-2.738V-6.351a3.283,3.283,0,0,0-.723-2.31,2.672,2.672,0,0,0-2.059-.777,3.16,3.16,0,0,0-2.387.909,3.623,3.623,0,0,0-.876,2.617V0h-2.737V-11.695h2.606v1.511a4.28,4.28,0,0,1,1.708-1.226A6.147,6.147,0,0,1,147.978-11.826Zm20.082.131v9.921q0,6.176-6.307,6.176a11.705,11.705,0,0,1-3.2-.427,6.783,6.783,0,0,1-2.5-1.237L157.286.679A5.86,5.86,0,0,0,159.224,1.7a7.6,7.6,0,0,0,2.376.383,3.921,3.921,0,0,0,2.825-.876,3.58,3.58,0,0,0,.9-2.672V-2.08A4.5,4.5,0,0,1,163.615-.92a6.02,6.02,0,0,1-2.212.394,6.344,6.344,0,0,1-3.011-.712,5.347,5.347,0,0,1-2.124-2A5.622,5.622,0,0,1,155.49-6.2a5.564,5.564,0,0,1,.777-2.946,5.294,5.294,0,0,1,2.124-1.982,6.425,6.425,0,0,1,3.011-.7,6.17,6.17,0,0,1,2.31.416,4.262,4.262,0,0,1,1.741,1.27v-1.555Zm-6.242,8.848a3.589,3.589,0,0,0,2.551-.931,3.16,3.16,0,0,0,1-2.42,3.1,3.1,0,0,0-1-2.387,3.614,3.614,0,0,0-2.551-.92,3.644,3.644,0,0,0-2.573.92,3.1,3.1,0,0,0-1,2.387,3.16,3.16,0,0,0,1,2.42A3.619,3.619,0,0,0,161.819-2.847Zm21.418-3.57-2.431,2.5V0h-2.847V-15.33h2.847v7.862l7.577-7.862h3.2l-6.439,6.855L191.975,0h-3.329Zm10.205-5.278h2.737V0h-2.737Zm1.38-1.927a1.758,1.758,0,0,1-1.248-.471,1.538,1.538,0,0,1-.5-1.172,1.538,1.538,0,0,1,.5-1.172,1.758,1.758,0,0,1,1.248-.471,1.808,1.808,0,0,1,1.248.449,1.447,1.447,0,0,1,.5,1.128,1.651,1.651,0,0,1-.493,1.215A1.705,1.705,0,0,1,194.822-13.622Zm19.71,1.8a4.758,4.758,0,0,1,3.5,1.281A5.193,5.193,0,0,1,219.328-6.7V0h-2.737V-6.351a3.424,3.424,0,0,0-.679-2.31,2.449,2.449,0,0,0-1.949-.777,2.855,2.855,0,0,0-2.212.909,3.708,3.708,0,0,0-.832,2.6V0h-2.738V-6.351a3.424,3.424,0,0,0-.679-2.31,2.449,2.449,0,0,0-1.949-.777,2.864,2.864,0,0,0-2.223.9,3.733,3.733,0,0,0-.821,2.606V0h-2.737V-11.695h2.606v1.489a4.256,4.256,0,0,1,1.643-1.2,5.577,5.577,0,0,1,2.19-.416,5.291,5.291,0,0,1,2.332.493,3.786,3.786,0,0,1,1.61,1.456,4.874,4.874,0,0,1,1.861-1.434A6.045,6.045,0,0,1,214.532-11.826Z"
            transform="translate(208.63 556.583)"
          />
          <path
            id="Path_1719"
            data-name="Path 1719"
            d="M1.681,0H8.552V-.944H2.772v-9.378H1.681ZM14.333.088c2.639,0,4.232-1.534,4.232-4.5v-5.913H17.5v5.869c0,2.448-1.15,3.568-3.17,3.568s-3.156-1.121-3.156-3.568v-5.869H10.086v5.913C10.086-1.445,11.693.088,14.333.088ZM29.447,0,25.51-5.338l3.657-4.984h-1.18L24.891-6.1l-3.111-4.217H20.526L24.2-5.308,20.275,0h1.253l3.318-4.542L28.179,0Zm5.942.088c2.639,0,4.232-1.534,4.232-4.5v-5.913H38.56v5.869c0,2.448-1.15,3.568-3.17,3.568s-3.156-1.121-3.156-3.568v-5.869H31.143v5.913C31.143-1.445,32.75.088,35.389.088ZM51.152,0,48.631-3.539A3.2,3.2,0,0,0,50.99-6.783c0-2.212-1.593-3.539-4.217-3.539H42.91V0H44V-3.274h2.772a7.348,7.348,0,0,0,.826-.044L49.958,0ZM46.743-4.2H44V-9.378h2.743c2.064,0,3.156.944,3.156,2.6C49.9-5.161,48.808-4.2,46.743-4.2Zm14.347-6.119H60l-3.539,5.8-3.539-5.8H51.757l4.129,6.753V0h1.076V-3.568Zm12.637.944v-.944H66.65V0h1.091V-4.379h5.338v-.944H67.741V-9.378ZM83.209,0h1.15L79.641-10.322H78.564L73.846,0h1.135L76.22-2.757h5.751ZM76.618-3.642,79.1-9.186l2.477,5.544ZM90.405.088a5.019,5.019,0,0,0,3.79-1.519L93.5-2.123A4.049,4.049,0,0,1,90.449-.885a4.218,4.218,0,0,1-4.365-4.276,4.218,4.218,0,0,1,4.365-4.276A4.091,4.091,0,0,1,93.5-8.213l.693-.693a5,5,0,0,0-3.775-1.5,5.182,5.182,0,0,0-5.412,5.249A5.178,5.178,0,0,0,90.405.088ZM96.524,0h1.091V-10.322H96.524Zm6.459,0h1.091V-9.378H107.7v-.944H99.356v.944h3.627Zm6.459,0h1.091V-10.322h-1.091Zm5.544-.944V-4.778h5.338v-.929h-5.338V-9.378h5.987v-.944h-7.078V0h7.3V-.944ZM126.605.088c2.639,0,3.849-1.3,3.849-2.816,0-3.76-6.355-2.05-6.355-4.881,0-1.032.84-1.873,2.728-1.873a5.314,5.314,0,0,1,2.831.855l.369-.87a5.827,5.827,0,0,0-3.2-.914c-2.625,0-3.8,1.312-3.8,2.831,0,3.819,6.355,2.079,6.355,4.91,0,1.017-.84,1.828-2.772,1.828A5.069,5.069,0,0,1,123.2-2.094l-.428.84A5.6,5.6,0,0,0,126.605.088Z"
            transform="translate(207.65 531.011)"
          />
          <path
            id="Path_1720"
            data-name="Path 1720"
            d="M3.686,0H4.778V-9.378H8.4v-.944H.059v.944H3.686Zm12.7-12.4-1.769-1.607H13.33L15.468-12.4Zm-3.141.369,1.43.87h1l-1.917-1.386H12.725l-1.917,1.386h1ZM17.341,0h1.15L13.772-10.322H12.7L7.977,0H9.113l1.239-2.757H16.1ZM10.75-3.642l2.477-5.544L15.7-3.642Zm17-6.68v8.375L21.1-10.322h-.9V0h1.091V-8.375L27.928,0h.9V-10.322ZM39.459-1.681a4.469,4.469,0,0,1-2.7.8,4.23,4.23,0,0,1-4.409-4.276,4.225,4.225,0,0,1,4.424-4.276,4.21,4.21,0,0,1,3.111,1.209l.678-.693a5.086,5.086,0,0,0-3.834-1.489,5.194,5.194,0,0,0-5.456,5.249A5.19,5.19,0,0,0,36.716.088a5.7,5.7,0,0,0,3.79-1.312V-5.161H39.459Z"
            transform="translate(695.72 531.01)"
          />
          <path
            id="Path_1721"
            data-name="Path 1721"
            d="M7.324.218c3.64,0,6.387-2.834,6.387-7.847s-2.747-7.847-6.387-7.847c-3.618,0-6.365,2.834-6.365,7.847S3.706.218,7.324.218Zm0-2.463c-2.071,0-3.509-1.7-3.509-5.384s1.439-5.384,3.509-5.384c2.093,0,3.531,1.7,3.531,5.384S9.417-2.245,7.324-2.245ZM21.907-8.959l3.706-4.4v-1.9h-10.4v2.376h6.932l-3.466,4.12v1.94h1.4c2.311,0,3.313.894,3.313,2.267,0,1.417-1.2,2.311-3.226,2.311a7.115,7.115,0,0,1-4.469-1.5l-1.221,2.2A9.586,9.586,0,0,0,20.207.218c4.1,0,6.038-2.223,6.038-4.8C26.245-6.866,24.784-8.588,21.907-8.959Zm6.43,4.033h5.994V-7.193H28.337ZM42.963.218c3.64,0,6.387-2.834,6.387-7.847s-2.747-7.847-6.387-7.847c-3.618,0-6.365,2.834-6.365,7.847S39.345.218,42.963.218Zm0-2.463c-2.071,0-3.509-1.7-3.509-5.384s1.439-5.384,3.509-5.384c2.093,0,3.531,1.7,3.531,5.384S45.056-2.245,42.963-2.245ZM64.87-5.864h-2.7V-8.937H59.508v3.073H54.516L61.6-15.258h-3.03L51.05-5.428v1.962h8.37V0h2.747V-3.466h2.7Z"
            transform="translate(685.225 556.583)"
          />
        </g>
      </a>
    </SvgIcon>
  );
}
